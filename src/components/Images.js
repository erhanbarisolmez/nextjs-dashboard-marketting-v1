'use client'
import Image from 'next/image';
 
export default function Images(props) {
  const {image, width = '30',height='30', alt} = props;
  return (
    <Image
      src={image}
      width={width}
      height={height}
      alt={alt}
      priority
    />
  )
}