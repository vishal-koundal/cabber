import InputField from '@/elements/InputField'
import Button from '@/elements/Button'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'

const formId = 'RegisterForm'

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
    <form id={formId} onSubmit={handleSubmit} className="space-y-5">
      <div className="md:flex md:space-y-0 md:space-x-4 space-y-5">
        <InputField
          label="First Name"
          name="firstName"
          value={values?.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.firstName && touched.firstName ? errors.firstName : ''}
        />
        <InputField
          label="Last Name"
          name="lastName"
          value={values?.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.lastName && touched.lastName ? errors.lastName : ''}
        />
      </div>
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
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        value={values?.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password && touched.password ? errors.password : ''}
      />
      <div className="pt-1.5">
        <Button
          variant="black"
          size="large"
          disabled={isSubmitting}
          type="submit"
          fullWidth
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
    password: '',
    firstName: '',
    lastName: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    password: Yup.string().required('Password is required!'),
    firstName: Yup.string().required('First name is required!'),
    lastName: Yup.string().required('Last name is required!'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.onSubmit(values)
    setSubmitting(false)
  },
  displayName: formId, // helps with React DevTools
})(RegisterForm)
