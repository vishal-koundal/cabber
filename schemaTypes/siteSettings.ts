import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Site Name',
      type: 'string',
      validation: (Rule) => Rule.required().min(2).max(100),
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags',
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'description',
      title: 'Site Description',
      type: 'text',
      validation: (Rule) => Rule.required().min(10).max(500),
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'object',
      fields: [
        defineField({
          name: 'facebook',
          title: 'Facebook URL',
          type: 'url',
        }),
        defineField({
          name: 'instagram',
          title: 'Instagram URL',
          type: 'url',
        }),
        defineField({
          name: 'youtube',
          title: 'YouTube URL',
          type: 'url',
        }),
      ],
    }),
    defineField({
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        defineField({
          name: 'email',
          title: 'Email',
          type: 'string',
          validation: (Rule) => Rule.email(),
        }),
        defineField({
          name: 'address',
          title: 'Address',
          type: 'text',
        }),
        defineField({
          name: 'mobile',
          title: 'Mobile Number',
          type: 'string',
          validation: (Rule) =>
            Rule.regex(/^[0-9+\-\s()]+$/, {
              name: 'phone number',
              invert: false,
            }),
        }),
      ],
    }),
    defineField({
      name: 'faqs',
      title: 'Frequently Asked Questions',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'question',
              title: 'Question',
              type: 'string',
              validation: (Rule) => Rule.required().min(5).max(200),
            }),
            defineField({
              name: 'answer',
              title: 'Answer',
              type: 'text',
              validation: (Rule) => Rule.required().min(10).max(1000),
            }),
          ],
          preview: {
            select: {
              title: 'question',
              subtitle: 'answer',
            },
            prepare(selection) {
              const {title, subtitle} = selection
              return {
                title: title,
                subtitle: subtitle?.substring(0, 100) + (subtitle?.length > 100 ? '...' : ''),
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'reviews',
      title: 'Customer Reviews',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'rating',
              title: 'Rating',
              type: 'string',
              options: {
                list: [
                  {title: '1 Star', value: '1'},
                  {title: '2 Stars', value: '2'},
                  {title: '3 Stars', value: '3'},
                  {title: '4 Stars', value: '4'},
                  {title: '5 Stars', value: '5'},
                ],
                layout: 'dropdown',
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'name',
              title: 'Customer Name',
              type: 'string',
              validation: (Rule) => Rule.required().min(2).max(100),
            }),
            defineField({
              name: 'review',
              title: 'Review',
              type: 'text',
              validation: (Rule) => Rule.required().min(10).max(500),
            }),
          ],
          preview: {
            select: {
              title: 'name',
              subtitle: 'review',
              rating: 'rating',
            },
            prepare(selection) {
              const {title, subtitle, rating} = selection
              return {
                title: `${title} - ${rating}/5 stars`,
                subtitle: subtitle?.substring(0, 100) + (subtitle?.length > 100 ? '...' : ''),
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
    },
    prepare(selection) {
      const {title, subtitle} = selection
      return {
        title: title || 'Site Settings',
        subtitle: subtitle?.substring(0, 100) + (subtitle?.length > 100 ? '...' : ''),
      }
    },
  },
})
