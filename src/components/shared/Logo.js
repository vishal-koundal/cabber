import config from '@/utils/config'
import React from 'react'

const Logo = ({ dark }) => {
  return (
    <h3
      className={
        dark ? 'text-black text-4xl font-bold' : 'text-white font-bold'
      }
    >
      {config.siteName}
    </h3>
  )
}

export default Logo
