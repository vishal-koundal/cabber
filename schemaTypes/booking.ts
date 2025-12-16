import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'booking',
  title: 'Booking',
  type: 'document',

  fields: [
    /* -------------------- Booking Meta -------------------- */
    defineField({
      name: 'bookingId',
      title: 'Booking ID',
      type: 'string',
      readOnly: true,
    }),

    defineField({
      name: 'bookingType',
      title: 'Booking Type',
      type: 'string',
      options: {
        list: [
          {title: 'Self Drive', value: 'self-drive'},
          {title: 'Cab', value: 'cab'},
          {title: 'Wedding', value: 'wedding'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'status',
      title: 'Booking Status',
      type: 'string',
      options: {
        list: [
          {title: 'Pending', value: 'pending'},
          {title: 'Confirmed', value: 'confirmed'},
          {title: 'In Progress', value: 'in_progress'},
          {title: 'Completed', value: 'completed'},
          {title: 'Cancelled', value: 'cancelled'},
        ],
        layout: 'radio',
      },
      initialValue: 'pending',
      validation: (Rule) => Rule.required(),
    }),

    /* -------------------- Customer Details -------------------- */
    defineField({
      name: 'customerDetails',
      title: 'Customer Details',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Customer Name',
          type: 'string',
          validation: (Rule) => Rule.required(),
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.required().email(),
        }),
        defineField({
          name: 'mobile',
          title: 'Mobile Number',
          type: 'string',
          validation: (Rule) =>
            Rule.required().regex(/^[0-9+\-\s()]+$/, {
              name: 'mobile number',
            }),
        }),
        defineField({
          name: 'message',
          title: 'Customer Message',
          type: 'text',
        }),
      ],
    }),

    /* -------------------- Trip Details -------------------- */
    defineField({
      name: 'tripDetails',
      title: 'Trip Details',
      type: 'object',
      fields: [
        defineField({
          name: 'pickupLocation',
          title: 'Pickup Location',
          type: 'string',
        }),
        defineField({
          name: 'dropLocation',
          title: 'Drop Location',
          type: 'string',
        }),
        defineField({
          name: 'tripType',
          title: 'Trip Type',
          type: 'string',
        }),
        defineField({
          name: 'daysRequired',
          title: 'Days Required',
          type: 'number',
        }),
        defineField({
          name: 'startDate',
          title: 'Start Date',
          type: 'datetime',
        }),
        defineField({
          name: 'endDate',
          title: 'End Date',
          type: 'datetime',
        }),
      ],
    }),

    /* -------------------- Car Snapshot -------------------- */
    defineField({
      name: 'carDetails',
      title: 'Car Details',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Car Name',
          type: 'string',
        }),
        defineField({
          name: 'seats',
          title: 'Seats',
          type: 'string',
        }),
        defineField({
          name: 'fuelType',
          title: 'Fuel Type',
          type: 'string',
        }),
        defineField({
          name: 'category',
          title: 'Category',
          type: 'string',
        }),
      ],
    }),

    /* -------------------- Pricing -------------------- */
    defineField({
      name: 'pricing',
      title: 'Pricing Details',
      type: 'object',
      fields: [
        defineField({
          name: 'baseFare',
          title: 'Base Fare',
          type: 'number',
        }),
        defineField({
          name: 'deliveryPickup',
          title: 'Delivery / Pickup Charges',
          type: 'number',
        }),
        defineField({
          name: 'insuranceGst',
          title: 'Insurance & GST',
          type: 'number',
        }),
        defineField({
          name: 'total',
          title: 'Total Amount',
          type: 'number',
        }),
        defineField({
          name: 'currency',
          title: 'Currency',
          type: 'string',
          initialValue: '₹',
        }),
      ],
    }),

    /* -------------------- Integrations -------------------- */
    defineField({
      name: 'telegramSent',
      title: 'Telegram Notification Sent',
      type: 'boolean',
      initialValue: false,
    }),
  ],

  /* -------------------- Preview -------------------- */
  preview: {
    select: {
      title: 'bookingId',
      subtitle: 'customerDetails.name',
      status: 'status',
    },
    prepare({title, subtitle, status}) {
      return {
        title: title || 'New Booking',
        subtitle: `${subtitle || 'Customer'} • ${status}`,
      }
    },
  },

  /* -------------------- Orderings -------------------- */
  orderings: [
    {
      title: 'Newest Bookings',
      name: 'createdDesc',
      by: [{field: '_createdAt', direction: 'desc'}],
    },
    {
      title: 'Oldest Bookings',
      name: 'createdAsc',
      by: [{field: '_createdAt', direction: 'asc'}],
    },
  ],
})
