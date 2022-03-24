// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean
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
    const draft = nylas.drafts.build({
      subject: 'Contact Request',
      to: [{ name: 'My Nylas Friend', email: process.env.MAIL_TO }],
      from: [{
        name: process.env.MAIL_FROM_NAME,
        email: process.env.MAIL_FROM_ADDRESS
      }],
      body: `Contact form from ${req.body.email}`,
    })

    const result = await draft.send()

    res.status(200).json({ success: true })
  } catch (error: any) {
    console.log("error", error)
    console.info(error)
    res.status(200).json({ success: false })
  }
}
