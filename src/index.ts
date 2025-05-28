import "@k2oss/k2-broker-core";

metadata = {
  systemName: "com.demo.sendgrid.email",
  displayName: "SendGrid Email Broker (HTTP)",
  description: "Sends emails using the SendGrid Web API directly.",
  configuration: {
    apiKey: {
      displayName: "SendGrid API Key",
      type: "string",
      required: true
    }
  }
};

ondescribe = async function () {
  postSchema({
    objects: {
      email: {
        displayName: "Email",
        description: "An email message to send via SendGrid.",
        properties: {
          to: { displayName: "To", type: "string" },
          from: { displayName: "From", type: "string" },
          subject: { displayName: "Subject", type: "string" },
          text: { displayName: "Text Body", type: "string" },
          html: { displayName: "HTML Body", type: "string" },
          status: { displayName: "Status", type: "string" }
        },
        methods: {
          send: {
            displayName: "Send Email",
            type: "create",
            inputs: ["to", "from", "subject", "text", "html"],
            outputs: ["status"]
          }
        }
      }
    }
  });
};

onexecute = async function ({
  objectName,
  methodName,
  properties,
  parameters,
  configuration
}) {
  switch (objectName) {
    case "email":
      await onexecuteEmail(methodName, properties, configuration);
      break;
    default:
      throw new Error("Object '" + objectName + "' not supported.");
  }
};

async function onexecuteEmail(
  methodName: string,
  properties: SingleRecord,
  configuration: SingleRecord
): Promise<void> {
  switch (methodName) {
    case "send":
      await onexecuteEmailSend(properties, configuration);
      break;
    default:
      throw new Error("Method '" + methodName + "' is not supported.");
  }
}

async function onexecuteEmailSend(
  properties: SingleRecord,
  configuration: SingleRecord
): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    const url = "https://api.sendgrid.com/v3/mail/send";
    const xhr = new XMLHttpRequest();
    xhr.open("POST", url);

    xhr.setRequestHeader("Authorization", "Bearer " + String(configuration.apiKey));
    xhr.setRequestHeader("Content-Type", "application/json");

    const body = {
      personalizations: [
        {
          to: [{ email: properties.to }],
          subject: properties.subject
        }
      ],
      from: { email: properties.from },
      content: [
        { type: "text/plain", value: properties.text || "" }
      ]
    };

    // Add HTML if provided
    if (properties.html) {
      body.content.push({ type: "text/html", value: properties.html });
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState !== 4) return;
      try {
        if (xhr.status >= 200 && xhr.status < 300) {
          postResult({
            status: String(xhr.status)
          });
          resolve();
        } else {
          reject(
            new Error(
              "SendGrid send failed: " + xhr.status + " - " + xhr.responseText
            )
          );
        }
      } catch (e) {
        reject(e);
      }
    };

    xhr.send(JSON.stringify(body));
  });
}
