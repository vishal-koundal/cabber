import InputField from '@/elements/InputField';
import Button from '@/elements/Button';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import React from 'react';
import TextAreaField from '@/elements/TextAreaField';

const formId = 'ContactForm';

const RegisterForm = (props) => {
  const {
    touched,
    errors,
    values,
    isSubmittingForm,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

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
          inputType="select"
          options={[
            { value: 'cabBooking', label: 'Cab Booking' },
            { value: 'selfDrive', label: 'Self Drive' },
            { value: 'other', label: 'Other' },
          ]}
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
          disabled={isSubmittingForm}
          type="submit"
          // className={isSubmittingForm ? 'opacity-50 cursor-not-allowed' : ''}
        >
          {isSubmittingForm ? (
            <div className="flex items-center">
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Submitting...
            </div>
          ) : (
            'Submit'
          )}
        </Button>
      </div>
    </form>
  );
};

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

  handleSubmit: (values, { setSubmitting, resetForm, props }) => {
    setSubmitting(true);
    props.onSubmit(values);
    setSubmitting(false);
    resetForm();
  },
  displayName: formId, // helps with React DevTools
})(RegisterForm);
