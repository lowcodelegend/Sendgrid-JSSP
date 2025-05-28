import "@k2oss/k2-broker-core";
import sgMail from "@sendgrid/mail";

/**
 * SendGrid Email Broker - Sends emails via SendGrid.
 */

metadata = {
  systemName: "com.demo.sendgrid.email",
  displayName: "SendGrid Email Broker",
  description: "Sends emails using the official SendGrid npm package.",
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
          messageId: { displayName: "Message ID", type: "string" },
          status: { displayName: "Status", type: "string" },
        },
        methods: {
          send: {
            displayName: "Send Email",
            type: "create",
            inputs: ["to", "from", "subject", "text", "html"],
            outputs: ["messageId", "status"]
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
  // Set the SendGrid API key
  sgMail.setApiKey(String(configuration.apiKey));

  // Prepare the message
  const msg: any = {
    to: properties.to,
    from: properties.from,
    subject: properties.subject,
    text: properties.text,
    html: properties.html,
    // Optionally, you can add more fields here
  };

  try {
    // Send the email
    const [response] = await sgMail.send(msg);

    // SendGrid doesn't return a messageId in the response directly, but you can grab from headers if needed
    let messageId = "";
    if (response && response.headers && response.headers["x-message-id"]) {
      messageId = response.headers["x-message-id"];
    }

    postResult({
      messageId: messageId,
      status: response.statusCode ? String(response.statusCode) : "sent"
    });
  } catch (err: any) {
    throw new Error("SendGrid send failed: " + (err.message || err.toString()));
  }
}
