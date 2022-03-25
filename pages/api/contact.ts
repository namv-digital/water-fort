// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean
}

const getEmailTemplates = (
  name: string,
  email: string,
  phone: string,
  country: string,
  company: string,
  telegram: string,
  interests: string,
  message: string
) => {
  return `
    <!DOCTYPE html>
      <html
        lang="en"
        xmlns:o="urn:schemas-microsoft-com:office:office"
        xmlns:v="urn:schemas-microsoft-com:vml"
      >
        <head>
          <title></title>
          <meta content="text/html; charset=utf-8" http-equiv="Content-Type" />
          <meta content="width=device-width,initial-scale=1" name="viewport" />
          <!--[if mso
            ]><xml
              ><o:OfficeDocumentSettings
                ><o:PixelsPerInch>96</o:PixelsPerInch
                ><o:AllowPNG /></o:OfficeDocumentSettings></xml
          ><![endif]-->
          <style>
            * {
              box-sizing: border-box;
            }
            body {
              margin: 0;
              padding: 0;
            }
            a[x-apple-data-detectors] {
              color: inherit !important;
              text-decoration: inherit !important;
            }
            #MessageViewBody a {
              color: inherit;
              text-decoration: none;
            }
            p {
              line-height: inherit;
            }
            @media (max-width: 520px) {
              .icons-inner {
                text-align: center;
              }
              .icons-inner td {
                margin: 0 auto;
              }
              .row-content {
                width: 100% !important;
              }
              .column .border {
                display: none;
              }
              .stack .column {
                width: 100%;
                display: block;
              }
            }
          </style>
        </head>
        <body
          style="
            background-color: #fff;
            margin: 0;
            padding: 0;
            -webkit-text-size-adjust: none;
            text-size-adjust: none;
          "
        >
          <table
            border="0"
            cellpadding="0"
            cellspacing="0"
            class="nl-container"
            role="presentation"
            style="mso-table-lspace: 0; mso-table-rspace: 0; background-color: #fff"
            width="100%"
          >
            <tbody>
              <tr>
                <td>
                  <table
                    align="center"
                    border="0"
                    cellpadding="0"
                    cellspacing="0"
                    class="row row-1"
                    role="presentation"
                    style="mso-table-lspace: 0; mso-table-rspace: 0"
                    width="100%"
                  >
                    <tbody>
                      <tr>
                        <td>
                          <table
                            align="center"
                            border="0"
                            cellpadding="0"
                            cellspacing="0"
                            class="row-content stack"
                            role="presentation"
                            style="
                              mso-table-lspace: 0;
                              mso-table-rspace: 0;
                              color: #000;
                              width: 500px;
                            "
                            width="500"
                          >
                            <tbody>
                              <tr>
                                <td
                                  class="column column-1"
                                  style="
                                    mso-table-lspace: 0;
                                    mso-table-rspace: 0;
                                    font-weight: 400;
                                    text-align: left;
                                    vertical-align: top;
                                    padding-top: 5px;
                                    padding-bottom: 5px;
                                    border-top: 0;
                                    border-right: 0;
                                    border-bottom: 0;
                                    border-left: 0;
                                  "
                                  width="100%"
                                >
                                  <table
                                    border="0"
                                    cellpadding="0"
                                    cellspacing="0"
                                    class="heading_block"
                                    role="presentation"
                                    style="mso-table-lspace: 0; mso-table-rspace: 0"
                                    width="100%"
                                  >
                                    <tr>
                                      <td style="width: 100%; text-align: center">
                                        <h1
                                          style="
                                            margin: 0;
                                            color: #555;
                                            font-size: 23px;
                                            font-family: Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            line-height: 120%;
                                            text-align: center;
                                            direction: ltr;
                                            font-weight: 700;
                                            letter-spacing: normal;
                                            margin-top: 0;
                                            margin-bottom: 0;
                                          "
                                        >
                                          <span class="tinyMce-placeholder"
                                            >Contact Request</span
                                          >
                                        </h1>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="paragraph_block"
                                    role="presentation"
                                    style="mso-table-lspace: 0; mso-table-rspace: 0"
                                    width="100%"
                                  >
                                    <tr>
                                      <td>
                                        <div
                                          style="
                                            color: #000;
                                            font-size: 14px;
                                            font-family: Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-weight: 400;
                                            line-height: 120%;
                                            text-align: left;
                                            direction: ltr;
                                            letter-spacing: 0;
                                          "
                                        >
                                          <p style="margin: 0">
                                            ${message || "No Message"}
                                          </p>
                                        </div>
                                      </td>
                                    </tr>
                                  </table>
                                  <table
                                    border="0"
                                    cellpadding="10"
                                    cellspacing="0"
                                    class="list_block"
                                    role="presentation"
                                    style="mso-table-lspace: 0; mso-table-rspace: 0"
                                    width="100%"
                                  >
                                    <tr>
                                      <td>
                                        <ul
                                          style="
                                            margin: 0;
                                            padding: 0;
                                            list-style-type: revert;
                                            list-style-position: inside;
                                            color: #000;
                                            font-size: 14px;
                                            font-family: Arial, Helvetica Neue,
                                              Helvetica, sans-serif;
                                            font-weight: 400;
                                            line-height: 120%;
                                            text-align: left;
                                            direction: ltr;
                                            letter-spacing: 0;
                                          "
                                        >
                                          <li style="margin-bottom: 0">
                                            Name: ${name}
                                          </li>
                                          <li style="margin-bottom: 0">
                                            Email: ${email}
                                          </li>
                                          <li style="margin-bottom: 0">
                                            Phone Number: ${phone}
                                          </li>
                                          <li style="margin-bottom: 0">
                                            Company: ${company}
                                          </li>
                                          <li style="margin-bottom: 0">
                                            Telegram: ${telegram}
                                          </li>
                                          <li style="margin-bottom: 0">
                                            Country: ${country}
                                          </li>
                                          <li>
                                            Interests: ${interests}
                                          </li>
                                        </ul>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
          <!-- End -->
        </body>
      </html>

    `
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const Nylas = require('nylas')

  Nylas.config({
    clientId: process.env.NYLAS_CLIENT_ID,
    clientSecret: process.env.NYLAS_CLIENT_SECRET,
  })

  const nylas = Nylas.with(process.env.NYLAS_ACCESS_TOKEN)

  try {
    const {
      email,
      name,
      phone,
      company,
      country,
      interests,
      telegram,
      message,
    } = req.body

    const draft = nylas.drafts.build({
      subject: 'Contact Request',
      to: [{ name: 'My Nylas Friend', email: process.env.MAIL_TO }],
      from: [
        {
          name: process.env.MAIL_FROM_NAME || "Visitor",
          email: process.env.MAIL_FROM_ADDRESS || "sam41312100@gmail.com",
        },
      ],
      body: getEmailTemplates(
        name,
        email,
        phone,
        country,
        company,
        telegram,
        interests,
        message
      ),
    })

    const result = await draft.send()

    res.status(200).json({ success: true })
  } catch (error: any) {
    console.log('error', error)
    console.info(error)
    res.status(201).json({ success: false })
  }
}
