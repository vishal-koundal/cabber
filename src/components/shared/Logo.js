import config from '@/utils/config';
import React from 'react';
import Image from 'next/image';

const Logo = ({ dark }) => {
  return (
    <Image
      src="/logo.png"
      alt={config.siteName}
      height={30}
      width={35}
      className="object-contain w-24 h-20"
    />
  );
};

export default Logo;
