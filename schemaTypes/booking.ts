import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'booking',
  title: 'Booking',
  type: 'document',
  fields: [
    defineField({
      name: 'selectedCar',
      title: 'Selected Car',
      type: 'reference',
      to: {type: 'car'},
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'customerDetails',
      title: 'Customer Details',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Customer Name',
          type: 'string',
          validation: (Rule) => Rule.required().min(2).max(100),
        }),
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.required().email(),
        }),
        defineField({
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          validation: (Rule) =>
            Rule.required().regex(/^[0-9+\-\s()]+$/, {
              name: 'phone number',
              invert: false,
            }),
        }),
      ],
    }),
    defineField({
      name: 'pickupLocation',
      title: 'Pickup Location',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(200),
    }),
    defineField({
      name: 'dropLocation',
      title: 'Drop Location',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(200),
    }),
    defineField({
      name: 'bookingDate',
      title: 'Booking Date',
      type: 'datetime',
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
    defineField({
      name: 'notes',
      title: 'Additional Notes',
      type: 'text',
      validation: (Rule) => Rule.max(500),
    }),
  ],
  preview: {
    select: {
      title: 'customerDetails.name',
      subtitle: 'selectedCar.name',
      status: 'status',
    },
    prepare(selection) {
      const {title, subtitle, status} = selection
      return {
        title: `${title} - ${subtitle}`,
        subtitle: `Status: ${status?.charAt(0).toUpperCase() + status?.slice(1)}`,
      }
    },
  },
  orderings: [
    {
      title: 'Booking Date (Newest)',
      name: 'bookingDateDesc',
      by: [{field: 'bookingDate', direction: 'desc'}],
    },
    {
      title: 'Booking Date (Oldest)',
      name: 'bookingDateAsc',
      by: [{field: 'bookingDate', direction: 'asc'}],
    },
    {
      title: 'Customer Name',
      name: 'customerName',
      by: [{field: 'customerDetails.name', direction: 'asc'}],
    },
  ],
})
