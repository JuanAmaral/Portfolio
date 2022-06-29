import React, { useEffect, useState } from 'react'
import { Effects3DImageQuina } from '../Effects3DImageQuina'
import * as style from './style'
import Mac from '../../../public/assets/img/Mac.png'

import { Suspense } from 'react'
import ImageNext from '../../Components/ImageNext'
interface modalType {
  closeModal(): void
  imageList: StaticImageData[]
  tittle: string
  description: string
}

const ModalProject: React.FC<modalType> = ({
  closeModal,
  imageList,
  tittle,
  description,
}) => {
  const [imageOrder, setImageOrder] = useState(0)

  function goToNextImage() {
    imageOrder <= imageList.length - 2
      ? setImageOrder(imageOrder + 1)
      : setImageOrder(0)
  }
  function goToPreviusImage() {
    imageOrder >= imageList.length - 3
      ? setImageOrder(imageOrder - 1)
      : setImageOrder(3)
  }

  return (
    <style.Container>
      <style.ContainerInside>
        <style.IconCloseCircleOutline onClick={closeModal} />
        <style.Text>{tittle}</style.Text>
        <style.ContainerSlider>
          <style.ContainerIcons onClick={() => goToPreviusImage()}>
            <style.IconArrowIosBackOutline />
            <style.IconArrowIosBackOutlinePurple />
          </style.ContainerIcons>
          <style.ContainerImages>
            <style.ContainerMac>
              <ImageNext src={Mac} alt="" width={'100%'} height={'100%'} />
            </style.ContainerMac>
            <style.ContainerScreen>
              <Suspense fallback={`Loading...`}>
                <ImageNext
                  src={imageList[imageOrder]}
                  alt=""
                  width={'100%'}
                  height={'100%'}
                />
              </Suspense>
            </style.ContainerScreen>
          </style.ContainerImages>

          <style.ContainerIcons onClick={() => goToNextImage()}>
            <style.IconArrowIosBackOutlineInvert />
            <style.IconArrowIosBackOutlinePurpleInvert />
          </style.ContainerIcons>
        </style.ContainerSlider>
        <style.TextInside>{description}</style.TextInside>
      </style.ContainerInside>
    </style.Container>
  )
}
export default ModalProject
