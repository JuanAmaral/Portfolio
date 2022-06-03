import React from 'react'
import * as style from './style'
import Image, { ImageProps } from 'next/image'

interface Props {
  src: string | HTMLImageElement | StaticImageData
  alt: string
  //   objectFit: ImageProps['objectFit']
  wider?: boolean
  priority?: boolean
  width: string
  height: string
}

export default function ImageNext({
  src,
  alt,
  wider,
  priority,
  width,
  height,
}: Props) {
  return (
    <style.DivNextImage width={width} height={height}>
      <Image
        src={src}
        alt={alt}
        objectFit="contain"
        priority={priority}
        layout="responsive"
        width={'100%'}
        height={'100%'}
      />
    </style.DivNextImage>
  )
}
