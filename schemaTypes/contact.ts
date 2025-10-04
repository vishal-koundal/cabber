import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Form',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
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
      name: 'mobile',
      title: 'Mobile Number',
      type: 'string',
      validation: (Rule) =>
        Rule.required().regex(/^[0-9+\-\s()]+$/, {
          name: 'phone number',
          invert: false,
        }),
    }),
    defineField({
      name: 'queryType',
      title: 'Query Type',
      type: 'string',
      options: {
        list: [
          {title: 'General Inquiry', value: 'general'},
          {title: 'Sales Inquiry', value: 'sales'},
          {title: 'Service Inquiry', value: 'service'},
          {title: 'Support', value: 'support'},
          {title: 'Other', value: 'other'},
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'message',
      title: 'Message',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(1000),
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
      queryType: 'queryType',
    },
    prepare(selection) {
      const {title, subtitle, queryType} = selection
      return {
        title: title,
        subtitle: `${subtitle} - ${queryType}`,
      }
    },
  },
})
