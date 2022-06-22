import React, { Component, useState } from 'react'
import * as style from './style'

type ComponentsImage = {
  img1: string | HTMLImageElement | StaticImageData | undefined
  img2: string | HTMLImageElement | StaticImageData | undefined
  img3: string | HTMLImageElement | StaticImageData | undefined
  img4: string | HTMLImageElement | StaticImageData | undefined
}

export const Effects3DImageQuina: React.FC<ComponentsImage> = ({
  img1,
  img2,
  img3,
  img4,
}) => {
  const [animation, setAnimation] = useState(false)
  const [click, setclick] = useState(false)
  return (
    <style.ContainerGeral>
      <style.ContainerImages onClick={() => setclick(!click)} press={click}>
        <style.Picture className="uma">
          <style.Image1 src={img4} layout={'responsive'} />
        </style.Picture>
        <style.Picture className="duas" style={{ marginTop: '-13rem' }}>
          <style.Image1 src={img3} layout={'responsive'} />
        </style.Picture>
        <style.Picture className="tres" style={{ marginTop: '-13.8rem' }}>
          <style.Image1 src={img2} layout={'responsive'} />
        </style.Picture>
        <style.Picture className="quatro" style={{ marginTop: '-13rem' }}>
          <style.Image1 src={img1} layout={'responsive'} />
        </style.Picture>
      </style.ContainerImages>
      {/* <style.button>Ellen project</style.button> */}
    </style.ContainerGeral>
  )
}
