const contactEmailTemplate = ({ name, email, msg }) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>New Portfolio Contact</title>
      </head>

      <body
        style="
          margin: 0;
          padding: 0;
          background-color: #f4f7fb;
          font-family: Arial, Helvetica, sans-serif;
        "
      >

        <table
          width="100%"
          cellpadding="0"
          cellspacing="0"
          border="0"
          style="background-color: #f4f7fb; padding: 40px 15px;"
        >
          <tr>
            <td align="center">

              <!-- Main Container -->
              <table
                width="600"
                cellpadding="0"
                cellspacing="0"
                border="0"
                style="
                  max-width: 600px;
                  width: 100%;
                  background-color: #ffffff;
                  border-radius: 12px;
                  overflow: hidden;
                  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                "
              >

                <!-- Header -->
                <tr>
                  <td
                    style="
                      background-color: #111827;
                      padding: 30px;
                      text-align: center;
                    "
                  >
                    <h1
                      style="
                        margin: 0;
                        color: #ffffff;
                        font-size: 26px;
                        font-weight: 600;
                      "
                    >
                      New Portfolio Message
                    </h1>

                    <p
                      style="
                        margin: 10px 0 0;
                        color: #d1d5db;
                        font-size: 14px;
                      "
                    >
                      Someone contacted you through your portfolio
                    </p>
                  </td>
                </tr>

                <!-- Content -->
                <tr>
                  <td style="padding: 35px 30px;">

                    <p
                      style="
                        margin: 0 0 25px;
                        color: #374151;
                        font-size: 16px;
                        line-height: 1.6;
                      "
                    >
                      You have received a new message from your portfolio
                      contact form.
                    </p>

                    <!-- Name -->
                    <div
                      style="
                        margin-bottom: 18px;
                        padding: 16px;
                        background-color: #f9fafb;
                        border-left: 4px solid #2563eb;
                        border-radius: 6px;
                      "
                    >
                      <p
                        style="
                          margin: 0 0 6px;
                          color: #6b7280;
                          font-size: 12px;
                          text-transform: uppercase;
                          font-weight: bold;
                        "
                      >
                        Name
                      </p>

                      <p
                        style="
                          margin: 0;
                          color: #111827;
                          font-size: 16px;
                          font-weight: 500;
                        "
                      >
                        ${name}
                      </p>
                    </div>

                    <!-- Email -->
                    <div
                      style="
                        margin-bottom: 18px;
                        padding: 16px;
                        background-color: #f9fafb;
                        border-left: 4px solid #2563eb;
                        border-radius: 6px;
                      "
                    >
                      <p
                        style="
                          margin: 0 0 6px;
                          color: #6b7280;
                          font-size: 12px;
                          text-transform: uppercase;
                          font-weight: bold;
                        "
                      >
                        Email
                      </p>

                      <p
                        style="
                          margin: 0;
                          font-size: 16px;
                        "
                      >
                        <a
                          href="mailto:${email}"
                          style="
                            color: #2563eb;
                            text-decoration: none;
                          "
                        >
                          ${email}
                        </a>
                      </p>
                    </div>

                    <!-- Message -->
                    <div
                      style="
                        padding: 20px;
                        background-color: #f9fafb;
                        border-left: 4px solid #2563eb;
                        border-radius: 6px;
                      "
                    >
                      <p
                        style="
                          margin: 0 0 10px;
                          color: #6b7280;
                          font-size: 12px;
                          text-transform: uppercase;
                          font-weight: bold;
                        "
                      >
                        Message
                      </p>

                      <p
                        style="
                          margin: 0;
                          color: #374151;
                          font-size: 15px;
                          line-height: 1.7;
                          white-space: pre-line;
                        "
                      >
                        ${msg}
                      </p>
                    </div>

                    <!-- Reply Button -->
                    <div
                      style="
                        text-align: center;
                        margin-top: 30px;
                      "
                    >
                      <a
                        href="mailto:${email}"
                        style="
                          display: inline-block;
                          padding: 13px 24px;
                          background-color: #2563eb;
                          color: #ffffff;
                          text-decoration: none;
                          border-radius: 6px;
                          font-size: 14px;
                          font-weight: bold;
                        "
                      >
                        Reply to ${name}
                      </a>
                    </div>

                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td
                    style="
                      background-color: #f9fafb;
                      padding: 22px 30px;
                      text-align: center;
                      border-top: 1px solid #e5e7eb;
                    "
                  >
                    <p
                      style="
                        margin: 0;
                        color: #6b7280;
                        font-size: 12px;
                      "
                    >
                      This email was sent from your MERN portfolio contact form.
                    </p>

                    <p
                      style="
                        margin: 8px 0 0;
                        color: #9ca3af;
                        font-size: 11px;
                      "
                    >
                      Please do not reply directly to this automated notification.
                    </p>
                  </td>
                </tr>

              </table>

            </td>
          </tr>
        </table>

      </body>
    </html>
  `;
};

module.exports = contactEmailTemplate;