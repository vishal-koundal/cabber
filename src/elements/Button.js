import Link from 'next/link'
import React from 'react'

const Button = ({
  children,
  href,
  variant = 'red',
  size = 'medium',
  otherCss = '',
  fullWidth,
  disabled,
  ...otherProps
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

  const baseClasses = `${fullWidth ? 'w-full' : 'w-auto'} ${
    sizeClasses[size]
  } ${typeClasses[variant]} ${
    disabled ? 'opacity-70 cursor-not-allowed' : 'opacity-100'
  } ${otherCss} rounded-xl transition duration-200 font-medium shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2`

  if (href) {
    return (
      <Link href={href} className={baseClasses}>
        {children}
      </Link>
    )
  }

  return (
    <button disabled={disabled} className={baseClasses} {...otherProps}>
      {children}
    </button>
  )
}

export default Button
