import Link from 'next/link'
import React from 'react'

const Button = ({
  children,
  href,
  type = 'red',
  size = 'medium',
  otherCss = '',
}) => {
  const typeClasses = {
    red: 'bg-primary text-white hover:bg-primary focus-visible:outline-primary',
    black: 'bg-black text-white hover:bg-black/80 focus-visible:outline-black',
    white: 'bg-white text-black hover:bg-gray-200 focus-visible:outline-white',
    gray: 'bg-secondary text-white hover:bg-secondary focus-visible:outline-secondary',
  }

  const sizeClasses = {
    medium: 'px-5 py-1.5 text-sm',
    large: 'px-6 py-2 text-base',
  }

  const baseClasses = `${sizeClasses[size]} ${typeClasses[type]} ${otherCss} rounded-xl transition duration-200 font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return <button className={baseClasses}>{children}</button>
}

export default Button
