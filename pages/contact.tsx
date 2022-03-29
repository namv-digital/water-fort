import type { NextPage } from 'next'
import { Field, Formik, useField } from 'formik'
import Layout from '../component/Layout'
import Navigation from '../component/Navigation'
import { COUNTRY_LIST } from '../constant/COUNTRY_LIST'
import { PHONE_CODE } from '../constant/PHONE_CODE'
import { useMemo, useState } from 'react'
import axios from 'axios'
import * as Yup from 'yup'
interface MySelectProps {
  className: string
  name: string
  children: React.ReactNode
}
const ContactSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  country: Yup.string().required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
})

const MySelect = ({ ...props }: MySelectProps) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <select {...field} {...props} />
    </div>
  )
}

const Contact: NextPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmitForm = async (values: any) => {
    const { email, name, phone, telegram, company, country, interests, message } = values
    try {
      const result = await axios.post('/api/contact', {
        email,
        name,
        phone,
        telegram,
        company,
        country,
        interests: interests.join(','),
        message
      })
      setSubmitted(true)
    } catch (error) { }
  }

  return (
    <div>
      <Layout>
        <div className="bg-fill pb-28">
          <Navigation />
          <div className="container mx-auto mt-16 px-5 md:mt-91px md:px-0 lg:max-w-container">
            <h1 className="text-4xl font-bold text-primary">Contact</h1>
          </div>
        </div>
        <div className="-mt-14 rounded-large bg-white px-5 pt-14  md:px-0 md:pt-20">
          <div className="container mx-auto grid gap-10 md:gap-20 lg:max-w-container lg:grid-cols-2">
            <div>
              <img
                src="/images/Logo_2.png"
                className="md:w-12/12 w-7/12"
                alt=""
                width=""
              />
              <div className="mt-7 md:mt-56.59px">
                <h3 className="text-2xl font-bold text-primary">Email</h3>
                <p className="mt-3 font-light text-third">
                  liquidity@waterfort.io
                </p>
              </div>
            </div>
            <div>
              <Formik
                initialValues={{
                  name: '',
                  email: '',
                  phone: '',
                  company: '',
                  country: '',
                  telegram: '',
                  message: '',
                  interests: [],
                }}
                validationSchema={ContactSchema}
                onSubmit={(values, { setSubmitting }) => {
                  handleSubmitForm(values)
                }}
              >
                {({
                  values,
                  errors,
                  touched,
                  handleChange,
                  handleBlur,
                  handleSubmit,
                  isSubmitting,
                  /* and other goodies */
                }) => (
                  <form onSubmit={handleSubmit}>
                    <div>
                      <label>
                        <span className="text-seccondery">Name</span>
                        <br />
                        <input
                          type="text"
                          placeholder="Input your name"
                          className="outline-none mt-1 w-full rounded-sm border-2 px-3 py-2"
                          name="name"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.name}
                        />
                        {errors.email && (
                          <span className="text-red-500">{errors.name}</span>
                        )}
                      </label>
                    </div>
                    <div className="mt-7">
                      <label>
                        <span className="text-seccondery">Email</span>
                        <br />
                        <input
                          type="email"
                          placeholder="Input your email"
                          className="outline-none mt-1 w-full rounded-sm border-2 px-3 py-2"
                          name="email"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.email}
                        />
                        {errors.email && (
                          <span className="text-red-500">{errors.email}</span>
                        )}
                      </label>
                    </div>
                    <div className="mt-7">
                      <label>
                        <span className="text-seccondery">Phone</span>
                        <br />
                        <input
                          type="text"
                          placeholder="Input your phone number"
                          className="outline-none mt-1 w-full rounded-sm border-2 px-3 py-2"
                          name="phone"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.phone}
                        />
                      </label>
                    </div>
                    <div className="mt-7">
                      <label>
                        <span className="text-seccondery">Company</span>
                        <br />
                        <input
                          type="text"
                          placeholder="Input your company"
                          className="outline-none mt-1 w-full rounded-sm border-2 px-3 py-2"
                          name="company"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.company}
                        />
                      </label>
                    </div>
                    <div className="mt-7">
                      <label>
                        <span className="text-seccondery">Telegram name</span>
                        <br />
                        <input
                          type="text"
                          placeholder="Input your Telegram name"
                          className="outline-none mt-1 w-full rounded-sm border-2 px-3 py-2"
                          name="telegram"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.telegram}
                        />
                      </label>
                    </div>
                    <div className="mt-7">
                      <label>
                        <span className="text-seccondery">Country</span>
                        <br />
                        <MySelect
                          className="outline-none mt-1 w-full rounded-sm border-2 px-3 py-2 text-third"
                          name="country"
                        >
                          <option>Select yout country</option>
                          {COUNTRY_LIST.map((country) => (
                            <option key={country} value={country}>
                              {country}
                            </option>
                          ))}
                        </MySelect>
                        {errors.country && (
                          <span className="text-red-500">{errors.country}</span>
                        )}
                      </label>
                    </div>
                    <div className="mt-7 text-primary">
                      <label>
                        <span className="text-seccondery">
                          I’m Interested in
                        </span>
                        <br />
                        <div role="group" aria-labelledby="checkbox-group">
                          <Field
                            type="checkbox"
                            name="interests"
                            value="OTC and Block Trading"
                            className="mt-5"
                          />
                          <span className="ml-3">OTC and Block Trading</span>
                          <br />
                          <Field
                            type="checkbox"
                            name="interests"
                            value="Order Book Market Making"
                            className="mt-3"
                          />
                          <span className="ml-3">Order Book Market Making</span>
                          <br />
                          <Field
                            type="checkbox"
                            name="interests"
                            value="Algorithmic Execution Orders"
                            className="mt-3"
                          />
                          <span className="ml-3">
                            Algorithmic Execution Orders
                          </span>
                          <br />
                          <Field
                            type="checkbox"
                            name="interests"
                            value="Others"
                            className="mt-3"
                          />
                          <span className="ml-3">Others</span>
                        </div>
                        <br />
                      </label>
                    </div>
                    <div className="mt-7">
                      <label>
                        <span className="text-seccondery">Message</span>
                        <br />
                        <textarea
                          placeholder="Input your message"
                          className="outline-none mt-1 w-full rounded-sm border-2 px-3 py-2"
                          name="message"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.message}
                          rows={3}
                        />
                      </label>
                    </div>
                    <button
                      className="button mt-7 rounded-md px-7 py-3 text-white"
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                )}
              </Formik>
              {(submitted) && (
               <div className='text-center fixed bg-white p-5 border inset-x-0 sm:w-10/12 lg:w-7/12 xl:w-5/12 mx-auto modal shadow'>
                 <p className='text-primary'>Contact request submitted! We will get back to you as soon as possible.</p>
                 <button onClick={()=> setSubmitted(!submitted)} className='button px-7 py-1 rounded-sm text-white mt-5'>Ok</button>
               </div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
