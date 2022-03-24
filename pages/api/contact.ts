// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let nodemailer = require('nodemailer')

  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: process.env.MAIL_ADDRESS,
      pass: process.env.MAIL_PASSWORD,
    },
    secure: true,
  })

  await new Promise((resolve, reject) => {
    // verify connection configuration
    transporter.verify(function (error: any, success: any) {
      if (error) {
        console.log(error)
        reject(error)
      } else {
        console.log('Server is ready to take our messages')
        resolve(success)
      }
    })
  })

  try {
    const mailData = {
      from: '"Fred Foo 👻" <liquidity@waterfort.io>',
      to: process.env.MAIL_TO,
      subject: 'Contact request ✔', // Subject line
      text: `Contact form from ${req.body.email}`, // plain text body
      html: `<b>Contact form from ${req.body.email}</b>`, // html body
    }

    await new Promise((resolve, reject) => {
      // send mail
      transporter.sendMail(mailData, (err: any, info: any) => {
        if (err) {
          console.error(err)
          reject(err)
        } else {
          console.log(info)
          resolve(info)
        }
      })
    })

    transporter.sendMail(mailData, function (err: any, info: any) {
      if (err) console.log(err)
      else console.log(info)
    })

    res.status(200).json({ success: true })
  } catch (error: any) {
    res.status(200).json({ success: false })
  }
}
