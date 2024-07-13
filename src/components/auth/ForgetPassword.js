import Button from '@/elements/Button'
import InputField from '@/elements/InputField'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'

const formId = 'ForgotPasswordForm'

const Form = () => {
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
        placeholder="example@email.com"
        label="Email Address"
        name="email"
        type="email"
        autoComplete="email"
        value={values?.email}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.email && touched.email ? errors.email : undefined}
      />
      <div>
        <Button isFullWidth disabled={isSubmitting} type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

const EnhancedForm = withFormik({
  mapPropsToValues: () => ({
    email: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email('Please enter valid email address.')
      .required('Email is required!'),
  }),

  handleSubmit: (values, { setSubmitting, resetForm, props }) => {
    props.onSubmit(values)
    setTimeout(() => {
      setSubmitting(false)
    }, 300)
    resetForm()
  },
  displayName: formId, // helps with React DevTools
})(Form)

export default EnhancedForm
