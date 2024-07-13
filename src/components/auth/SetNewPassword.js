import InputField from '@/elements/InputField'
import { withFormik } from 'formik'
import * as Yup from 'yup'
import React from 'react'
import Button from '@/elements/Button'

const formId = 'SetNewPasswordForm'

const RegisterForm = () => {
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
        label="Password"
        name="password"
        type="password"
        autoComplete="current-password"
        value={values?.password}
        onChange={handleChange}
        onBlur={handleBlur}
        error={errors.password && touched.password ? errors.password : ''}
      />
      <InputField
        label="Confirm Password"
        name="confirmPassword"
        type="password"
        value={values?.confirmPassword}
        onChange={handleChange}
        onBlur={handleBlur}
        error={
          errors.confirmPassword && touched.confirmPassword
            ? errors.confirmPassword
            : ''
        }
      />
      <div>
        <Button isFullWidth disabled={isSubmitting} type="submit">
          Submit
        </Button>
      </div>
    </form>
  )
}

export default withFormik({
  mapPropsToValues: () => ({
    password: '',
    confirmPassword: '',
  }),
  validationSchema: Yup.object().shape({
    password: Yup.string()
      .required('Password is required!')
      .min(2, 'Seems a bit short...'),
    confirmPassword: Yup.string()
      .required('This filed is required!')
      .label('Confirm password')
      .test('passwords-match', 'Passwords not matched!', function (values) {
        return this.parent.password === values
      }),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.onSubmit(values)
    setSubmitting(false)
  },
  displayName: formId, // helps with React DevTools
})(RegisterForm)
