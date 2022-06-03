import React, { Component, useState } from 'react'
import * as style from './style'
import ellen1 from '../../../public/assets/img/EllenEffect/ellen1.png'
import ellen2 from '../../../public/assets/img/EllenEffect/ellen2.png'
import ellen3 from '../../../public/assets/img/EllenEffect/ellen3.png'
import ellen4 from '../../../public/assets/img/EllenEffect/ellen4.png'
import Image from 'next/image'

// type ComponentsImage = {
//   img1: string | HTMLImageElement | StaticImageData
//   img2: string | HTMLImageElement | StaticImageData
//   img3: string | HTMLImageElement | StaticImageData
//   img4: string | HTMLImageElement | StaticImageData
// }

export default function Effects() {
  const [animation, setAnimation] = useState(false)
  const [click, setclick] = useState(false)
  return (
    <style.ContainerGeral>
      <style.ContainerImages onClick={() => setclick(!click)} press={click}>
        <div className="uma">
          <style.Image1 src={ellen4} layout={'responsive'} />
        </div>
        <div className="duas" style={{ marginTop: '-13rem' }}>
          <style.Image2 src={ellen3} layout={'responsive'} />
        </div>
        <div className="tres" style={{ marginTop: '-13.8rem' }}>
          <style.Image3 src={ellen2} layout={'responsive'} />
        </div>
        <div className="quatro" style={{ marginTop: '-13rem' }}>
          <style.Image4 src={ellen1} layout={'responsive'} />
        </div>
      </style.ContainerImages>
      {/* <style.ImageProject src={Ellenzinha} layout={'responsive'} /> */}
    </style.ContainerGeral>
  )
}
