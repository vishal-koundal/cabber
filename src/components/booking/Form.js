'use client';
import React, { useState, useRef } from 'react';
import { withFormik } from 'formik';
import * as Yup from 'yup';
import InputField from '@/elements/InputField';
import Button from '@/elements/Button';
const formId = 'BookingForm';
import { Autocomplete, useJsApiLoader } from '@react-google-maps/api';

const Form = (props) => {
  const {
    touched,
    errors,
    values,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  const autocompletePickup = useRef(null);
  const autocompleteDrop = useRef(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 'AIzaSyAc2IKutCrnQpgNAjfTvSuDH1y7Sj9F2X8', // Replace with your API Key
    libraries: ['places'],
  });
  const onPlaceChanged = (type) => {
    if (type === 'pickup' && autocompletePickup.current) {
      const place = autocompletePickup.current.getPlace();
      setPickup(place?.formatted_address || '');
    } else if (type === 'drop' && autocompleteDrop.current) {
      const place = autocompleteDrop.current.getPlace();
      setDrop(place?.formatted_address || '');
    }
  };

  if (!isLoaded) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>
        <div className="sm:hidden">
          <label htmlFor="Tab" className="sr-only">
            Tab
          </label>

          <select
            value={values.type}
            id="Tab"
            onChange={handleChange}
            className="w-full rounded-md border-gray-200"
          >
            <option>Cab Booking</option>
            <option>Self Drive</option>
          </select>
        </div>
        {!isLoaded && <div>Loading...</div>}
        <div className="hidden sm:block">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex gap-6" aria-label="Tabs">
              <a
                className={`${
                  values.type === 'cab-booking'
                    ? 'text-brand border-brand'
                    : 'text-gray-500 hover:border-gray-300 hover:text-gray-700 border-transparent'
                } shrink-0 border-b-2 px-1 pb-4 text-sm font-medium`}
                onClick={() => handleChange({ ...values, type: 'cab-booking' })}
              >
                Cab Booking
              </a>

              <a
                href="#"
                className={`${
                  values.type === 'self-drive'
                    ? 'text-brand border-brand'
                    : 'text-gray-500 hover:border-gray-300 hover:text-gray-700'
                } shrink-0 border-b-2 border-transparent px-1 pb-4 text-sm font-medium`}
                onClick={() => handleChange({ ...values, type: 'self-drive' })}
              >
                Self Drive
              </a>
            </nav>
          </div>
        </div>
      </div>

      <div className="space-y-4 pt-8">
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
        <Autocomplete
          onLoad={(ref) => (autocompletePickup.current = ref)}
          onPlaceChanged={() => onPlaceChanged('pickup')}
        >
          <InputField
            label="Pickup Location"
            // name="email"
            // type="email"
            // autoComplete="email"
            value={values?.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email ? errors.email : undefined}
          />
        </Autocomplete>

        <Autocomplete
          onLoad={(ref) => (autocompleteDrop.current = ref)}
          onPlaceChanged={() => onPlaceChanged('drop')}
        >
          <InputField
            label="Drop Location"
            // name="email"
            // type="email"
            // autoComplete="email"
            value={values?.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={errors.email && touched.email ? errors.email : undefined}
          />
        </Autocomplete>

        <div className="pt-2">
          <Button
            variant="black"
            size="large"
            disabled={isSubmitting}
            type="submit"
            fullWidth
          >
            {isSubmitting ? 'Loading...' : 'Submit'}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    type: 'cab-booking',
  }),
  validationSchema: Yup.object().shape({
    // password: Yup.string().required('Password is required!'),
  }),

  handleSubmit: (values, { setSubmitting, props }) => {
    props.onSubmit(values);
    setSubmitting(false);
  },
  displayName: formId, // helps with React DevTools
})(Form);
