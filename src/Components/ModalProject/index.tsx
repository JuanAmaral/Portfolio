import React, { Component } from 'react'
import { Effects3DImageQuina } from '../Effects3DImageQuina'
import * as style from './style'
import quina1 from '../../../public/assets/img/QuinaEffect/quina1.png'
import quina2 from '../../../public/assets/img/QuinaEffect/quina2.png'
import quina3 from '../../../public/assets/img/QuinaEffect/quina3.png'
import quina4 from '../../../public/assets/img/QuinaEffect/quina4.png'

interface modalType {
  closeModal(): void
}

const ModalProject: React.FC<modalType> = ({ closeModal }) => {
  return (
    <style.Container>
      <style.ContainerInside>
        <style.IconCloseCircleOutline onClick={closeModal} />
        <style.Text>Quina painel administrativo</style.Text>
        <div style={{ width: '90%' }}>
          <Effects3DImageQuina
            img1={quina1}
            img2={quina2}
            img3={quina3}
            img4={quina4}
          />
        </div>
        <style.TextInside>Projeto adminsitrativo...</style.TextInside>
      </style.ContainerInside>
    </style.Container>
  )
}
export default ModalProject
