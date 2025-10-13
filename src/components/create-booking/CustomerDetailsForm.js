'use client';

import Button from '@/elements/Button';
import InputField from '@/elements/InputField';
import TextAreaField from '@/elements/TextAreaField';
import SelectInput from '@/elements/SelectInput';
import React, { useState } from 'react';

const CustomerDetailsForm = ({
  bookingType,
  onBack,
  onSubmit,
  onTripDetailsSubmit,
  isSubmitting = false,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: '',
    // Cab specific fields
    pickupLocation: '',
    dropLocation: '',
    tripType: 'single', // 'single' or 'round'
    // Self drive specific fields
    daysRequired: 1,
    startDate: '',
    endDate: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    // Common validations
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.mobile.trim()) newErrors.mobile = 'Mobile number is required';
    else if (!/^\d{10}$/.test(formData.mobile.replace(/\D/g, '')))
      newErrors.mobile = 'Mobile number must be 10 digits';

    // Cab specific validations
    if (bookingType === 'cab') {
      if (!formData.pickupLocation.trim())
        newErrors.pickupLocation = 'Pickup location is required';
      if (!formData.dropLocation.trim())
        newErrors.dropLocation = 'Drop location is required';
    }

    // Self drive specific validations
    if (bookingType === 'self-drive') {
      if (!formData.startDate) newErrors.startDate = 'Start date is required';
      if (!formData.endDate) newErrors.endDate = 'End date is required';
      if (
        formData.startDate &&
        formData.endDate &&
        new Date(formData.startDate) >= new Date(formData.endDate)
      ) {
        newErrors.endDate = 'End date must be after start date';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onTripDetailsSubmit(formData);
    }
  };

  const handleFinalSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      onTripDetailsSubmit(formData);
    }
  };

  return (
    <div className="border rounded-lg py-6">
      <div className="px-5">
        <h3 className="text-lg font-semibold mb-4">
          {bookingType === 'cab'
            ? 'Cab Booking Details'
            : 'Self Drive Booking Details'}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Common Customer Details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              error={errors.name}
              required
            />

            <InputField
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={errors.email}
              required
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <InputField
              label="Mobile Number"
              name="mobile"
              type="tel"
              value={formData.mobile}
              onChange={(e) => handleInputChange('mobile', e.target.value)}
              error={errors.mobile}
              required
            />
          </div>

          {/* Cab Specific Fields */}
          {bookingType === 'cab' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <InputField
                  label="Pickup Location"
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={(e) =>
                    handleInputChange('pickupLocation', e.target.value)
                  }
                  error={errors.pickupLocation}
                  required
                />

                <InputField
                  label="Drop Location"
                  name="dropLocation"
                  value={formData.dropLocation}
                  onChange={(e) =>
                    handleInputChange('dropLocation', e.target.value)
                  }
                  error={errors.dropLocation}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SelectInput
                  label="Trip Type"
                  name="tripType"
                  value={formData.tripType}
                  onChange={(e) =>
                    handleInputChange('tripType', e.target.value)
                  }
                  options={[
                    { value: 'single', label: 'Single Trip' },
                    { value: 'round', label: 'Round Trip' },
                  ]}
                />
              </div>
            </>
          )}

          {/* Self Drive Specific Fields */}
          {bookingType === 'self-drive' && (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <InputField
                  label="Days Required"
                  name="daysRequired"
                  type="number"
                  min="1"
                  value={formData.daysRequired}
                  onChange={(e) =>
                    handleInputChange('daysRequired', parseInt(e.target.value))
                  }
                />

                <InputField
                  label="Start Date"
                  name="startDate"
                  type="date"
                  value={formData.startDate}
                  onChange={(e) =>
                    handleInputChange('startDate', e.target.value)
                  }
                  error={errors.startDate}
                  required
                />

                <InputField
                  label="End Date"
                  name="endDate"
                  type="date"
                  value={formData.endDate}
                  onChange={(e) => handleInputChange('endDate', e.target.value)}
                  error={errors.endDate}
                  required
                />
              </div>
            </>
          )}

          {/* Message Field */}
          <TextAreaField
            label="Additional Message (Optional)"
            name="message"
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={3}
          />

          {/* Action Buttons */}
          <div className="flex justify-between pt-6">
            <Button
              type="button"
              variant="gray"
              onClick={onBack}
              className="px-6 py-2 flex items-center space-x-2"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>Back</span>
            </Button>

            <Button
              type="submit"
              variant="black"
              size="large"
              disabled={isSubmitting}
              className={isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}
            >
              {isSubmitting ? (
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
                  Processing...
                </div>
              ) : (
                'Submit'
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerDetailsForm;
