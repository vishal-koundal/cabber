import React from 'react'

const FaqItem = () => {
  return (
    <details class="group py-6 [&_summary::-webkit-details-marker]:hidden">
      <summary class="flex cursor-pointer items-center justify-between gap-1.5 text-gray-900">
        <h2 class="text-lg font-medium text-brand">
          Lorem ipsum dolor sit amet consectetur adipisicing?
        </h2>

        <span class="relative size-5 shrink-0 text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute inset-0 size-5 opacity-100 group-open:opacity-0"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              stroke-linecap="round"
              strokeLinejoin="round"
              d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="absolute inset-0 size-5 opacity-0 group-open:opacity-100"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              stroke-linecap="round"
              strokeLinejoin="round"
              d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </span>
      </summary>

      <p class="mt-4 leading-relaxed text-brand text-sm font-light">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic
        veritatis molestias culpa in, recusandae laboriosam neque aliquid libero
        nesciunt voluptate dicta quo officiis explicabo consequuntur distinctio
        corporis earum similique!
      </p>
    </details>
  )
}

export default FaqItem
