import Button from '@/elements/Button'
import InputField from '@/elements/InputField'
import { withFormik } from 'formik'
import Link from 'next/link'
import * as Yup from 'yup'
import React from 'react'

const formId = 'LoginForm'

const Form = (props) => {
  const {
    touched,
    errors,
    values,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props
  // console.log('values', values)

  return (
    <form id={formId} onSubmit={handleSubmit} className="space-y-6">
      <InputField
        label="Email Address"
        name="email"
        type="email"
        autoComplete="email"
        value={values?.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email && touched.email ? errors.email : undefined}
      />

      <InputField
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        value={values?.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          errors.password && touched.password ? errors.password : undefined
        }
      />
      <div className="flex justify-end">
        <Link
          href="/auth/forgot-password"
          className="font-semibold text-sm leading-6 text-primary hover:text-primary"
        >
          Forgot Password?
        </Link>
      </div>
      <div>
        <Button
          variant="black"
          size="large"
          disabled={isSubmitting}
          type="submit"
          fullWidth
        >
          {isSubmitting ? 'Loading...' : 'SIGN IN'}
        </Button>
      </div>
    </form>
  )
}

export default withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required!'),
    password: Yup.string().required('Password is required!'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.onSubmit(values)
    setSubmitting(false)
  },
  displayName: formId, // helps with React DevTools
})(Form)
