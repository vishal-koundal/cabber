import InputField from '@/elements/InputField'
import Button from '@/elements/Button'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import TextAreaField from '@/elements/TextAreaField'

const formId = 'ContactForm'

const RegisterForm = (props) => {
  const {
    touched,
    errors,
    values,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props

  return (
    <form
      id={formId}
      onSubmit={handleSubmit}
      className="space-y-5 md:w-10/12 mx-auto"
    >
      <div className="md:grid grid-cols-2 gap-5">
        <InputField
          label="Name"
          name="name"
          value={values?.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name && touched.name ? errors.name : ''}
        />
        <InputField
          label="Email address"
          name="email"
          type="email"
          autoComplete="email"
          value={values?.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email && touched.email ? errors.email : ''}
        />
        <InputField
          label="Mobile number"
          name="telephone"
          type="tel"
          value={values?.telephone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.telephone && touched.telephone ? errors.telephone : ''}
        />
        <InputField
          label="Subject"
          name="subject"
          type="text"
          value={values?.subject}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.subject && touched.subject ? errors.subject : ''}
        />
      </div>
      <div>
        <TextAreaField
          label="Message"
          name="message"
          type="text"
          rows={5}
          value={values?.message}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.message && touched.message ? errors.message : ''}
        />
      </div>

      <div className="pt-1.5 text-center">
        <Button
          variant="black"
          size="large"
          disabled={isSubmitting}
          type="submit"
          // fullWidth
        >
          {isSubmitting ? 'Loading...' : 'SIGN UP'}
        </Button>
      </div>
    </form>
  )
}

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    telephone: '',
    name: '',
    subject: '',
    message: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    telephone: Yup.string().required('Mobile number is required!'),
    name: Yup.string().required('Name is required!'),
    subject: Yup.string().required('Subject is required!'),
    message: Yup.string().required('Message is required!'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.onSubmit(values)
    setSubmitting(false)
  },
  displayName: formId, // helps with React DevTools
})(RegisterForm)
