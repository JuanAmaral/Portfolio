import React, { Component, useState } from 'react'
import * as style from './style'
import ellen1 from '../../assets/EllenEffect/ellen1.png'
import ellen2 from '../../assets/EllenEffect/ellen2.png'
import ellen3 from '../../assets/EllenEffect/ellen3.png'
import ellen4 from '../../assets/EllenEffect/ellen4.png'
import Image from 'next/image'

export default function Effects() {
  const [animation, setAnimation] = useState(false)
  return (
    <style.ContainerGeral>
      <style.ContainerImages>
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
