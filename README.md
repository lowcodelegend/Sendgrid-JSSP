# K2 JSSP TypeScript Broker for SendGrid Email

Integrate SendGrid Email with your K2 low-code platform: send emails, fetch stats, and validate email addresses—all via the official SendGrid Web API.

---

## Features

- **Send Email:** Send emails via SendGrid with plain text and HTML support.
- **Secure Authentication:** Uses SendGrid API Key..
- **K2 JSSP Compatible:** Deploy as a JavaScript Service Provider in K2.

---

## Requirements

- [Node.js](https://nodejs.org/) v22.5.1+
- [SendGrid Account](https://signup.sendgrid.com/)
- K2 environment with JavaScript Service Provider support

---

## Deployment

Most users **do not need to build or modify the code** themselves.

### Option 1: Deploy by File

1. **Copy the built file**  
   The distributable file is already built for you:  
   - Use `dist/index.js` from this repository.
2. **(Optional) Rename**  
   You may rename `index.js` to something more descriptive, such as `sendgrid-email-broker.jssp`:
   ```bash
   mv dist/index.js dist/sendgrid-email-broker.jssp
   ```
3. **Upload in K2**  
   - Navigate to  
     `System > Management > SmartObjects > SmartObjects > JavaScript Service Provider`
   - Click **Create or Update from File** and select your `.jssp` file.

### Option 2: Deploy by URL

1. **Host** the built file (`dist/index.js`) at a public URL of your choice.
2. **Register in K2**  
   - Go to  
     `System > Management > SmartObjects > SmartObjects > JavaScript Service Provider`
   - Use **Create or Update from URL** and provide the direct link to your hosted file.

---

## Building the Broker (For Developers or Custom Builds)

If you need to build the broker yourself (for customization or contributing):

1. **Clone or fork this repository.**
2. **Install dependencies:**
    ```bash
    npm install
    ```
    or
    ```bash
    pnpm install
    ```
3. **Build the distributable file:**
    ```bash
    npm run build
    ```
    or
    ```bash
    pnpm run build
    ```
4. The output file will appear in the `dist` folder as `index.js`.

You can now follow the deployment instructions above using your built file.

---

## Configuration

After uploading or registering the broker file,  
**create a service instance** for the SendGrid Email Broker in your K2 environment.  
You can do this via:
- The K2 Management Site  
- Or the SmartObject Service Tester

You
