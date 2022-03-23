import type { NextPage } from 'next'
import { Field, Formik, useField } from 'formik'
import Layout from '../component/Layout'
import Navigation from '../component/Navigation'
import { COUNTRY_LIST } from '../constant/COUNTRY_LIST'
import { PHONE_CODE } from '../constant/PHONE_CODE'
import { useMemo, useState } from 'react'
import { string } from 'yup'
import axios from 'axios'

interface MySelectProps {
  className: string
  name: string
  children: React.ReactNode
}

const MySelect = ({ ...props }: MySelectProps) => {
  const [field, meta] = useField(props)
  return (
    <div>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  )
}

const Contact: NextPage = () => {
  const [submitted, setSubmitted] = useState(false)
  const handleSubmitForm = async (values: any) => {
    console.log('values', values)
    try {
      const result = await axios.post('/api/contact', { email: values.email })
      setSubmitted(true)
    } catch (error) {}
  }

  const phoneCodes = useMemo(() => {
    const codesList = Object.values(PHONE_CODE).filter((code) => !!code)

    return codesList.filter(function (item, pos) {
      return codesList.indexOf(item) == pos
    })
  }, [])

  return (
    <div>
      <Layout>
        <div className="bg-fill pb-32 md:pb-36">
          <Navigation />
          <div className="container mx-auto mt-16 px-5 md:mt-91px md:px-0 lg:max-w-container">
            <h1 className="text-4xl font-bold text-primary">Contact</h1>
          </div>
        </div>
        <div className="-mt-20 rounded-large bg-white px-5 pt-14  md:px-0 md:pt-20">
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
                  telegram: '',
                  message: '',
                  checked: [],
                }}
                validate={(values) => {
                  const errors = Object.assign({})
                  if (!values.email) {
                    errors.email = 'Required'
                  } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                      values.email
                    )
                  ) {
                    errors.email = 'Invalid email address'
                  }
                  return errors
                }}
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
                        <div className="flex rounded-sm border-2 px-2">
                          <MySelect
                            className="outline-none h-full font-semibold text-third"
                            name="phoneCode"
                          >
                            {phoneCodes.map((code) => (
                              <option key={code} value={code}>
                                {code}
                              </option>
                            ))}
                          </MySelect>
                          <input
                            type="text"
                            placeholder="Input your phone number"
                            className="outline-none mt-1 ml-3 w-full rounded-sm px-3 py-2"
                            name="phone"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.phone}
                          />
                        </div>
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
                            name="interested"
                            value="OTC and Block Trading"
                            className="mt-5"
                          />
                          <span className="ml-3">OTC and Block Trading</span>
                          <br />
                          <Field
                            type="checkbox"
                            name="interested"
                            value="Order Book Market Making"
                            className="mt-3"
                          />
                          <span className="ml-3">Order Book Market Making</span>
                          <br />
                          <Field
                            type="checkbox"
                            name="interested"
                            value="Algorithmic Execution Orders"
                            className="mt-3"
                          />
                          <span className="ml-3">
                            Algorithmic Execution Orders
                          </span>
                          <br />
                          <Field
                            type="checkbox"
                            name="interested"
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
              {submitted && (
                <div className="text text-green-600">Thank you</div>
              )}
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Contact
