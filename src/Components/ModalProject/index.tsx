import React, { Component } from 'react'
import { Effects3DImageQuina } from '../Effects3DImageQuina'
import * as style from './style'
import Mac from '../../../public/assets/img/Mac.png'
import QuinaDashboard1 from '../../../public/assets/img/QuinaDashboard/QuinaDashboard1.png'
import QuinaDashboard2 from '../../../public/assets/img/QuinaDashboard/QuinaDashboard2.png'
import QuinaDashboard3 from '../../../public/assets/img/QuinaDashboard/QuinaDashboard3.png'
import QuinaDashboard4 from '../../../public/assets/img/QuinaDashboard/QuinaDashboard4.png'

import ImageNext from '../../Components/ImageNext'
interface modalType {
  closeModal(): void
}

const ModalProject: React.FC<modalType> = ({ closeModal }) => {
  return (
    <style.Container>
      <style.ContainerInside>
        <style.IconCloseCircleOutline onClick={closeModal} />
        <style.Text>Quina painel administrativo</style.Text>
        <style.ContainerSlider>
          <style.ContainerIconsLeft>
            <style.IconArrowIosBackOutline />
            <style.IconArrowIosBackOutlinePurple />
          </style.ContainerIconsLeft>

          <style.ContainerMac>
            <ImageNext src={Mac} alt="" width={'100%'} height={'100%'} />
          </style.ContainerMac>

          <style.ContainerScreen>
            <ImageNext
              src={QuinaDashboard1}
              alt=""
              width={'10rem'}
              height={'100%'}
            />
          </style.ContainerScreen>
          <style.ContainerIconsLeft>
            <style.IconArrowIosBackOutlineInvert />
            <style.IconArrowIosBackOutlinePurpleInvert />
          </style.ContainerIconsLeft>
        </style.ContainerSlider>
        <style.TextInside>Projeto adminsitrativo...</style.TextInside>
      </style.ContainerInside>
    </style.Container>
  )
}
export default ModalProject
