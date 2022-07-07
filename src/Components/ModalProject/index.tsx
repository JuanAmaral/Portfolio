import React, { useEffect, useState } from 'react'
import { Effects3DImageQuina } from '../Effects3DImageQuina'
import * as style from './style'
import Mac from '../../../public/assets/img/Mac.png'
import Iphone from '../../../public/assets/img/Iphone1.png'

import { Suspense } from 'react'
import ImageNext from '../../Components/ImageNext'
interface modalType {
  closeModal(): void
  imageList: StaticImageData[]
  tittle: string
  description: string
  displayPhone: boolean
}

const ModalProject: React.FC<modalType> = ({
  closeModal,
  imageList,
  tittle,
  description,
  displayPhone,
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
  useEffect(() => {
    console.log('displayPhone: ' + displayPhone)
  }, [])

  return (
    <style.Container>
      <style.ContainerInside>
        <style.IconCloseCircleOutline onClick={closeModal} />
        <style.Text>{tittle}</style.Text>
        <style.changeDisplay>
          <style.ContainerSlider>
            <style.ContainerIcons onClick={() => goToPreviusImage()}>
              <style.IconArrowIosBackOutline />
              <style.IconArrowIosBackOutlinePurple />
            </style.ContainerIcons>
            <style.ContainerImages>
              {displayPhone ? (
                <style.ContainerIphone>
                  <ImageNext
                    src={Iphone}
                    alt=""
                    width={'100%'}
                    height={'100%'}
                  />
                </style.ContainerIphone>
              ) : (
                <style.ContainerMac>
                  <ImageNext src={Mac} alt="" width={'100%'} height={'100%'} />
                </style.ContainerMac>
              )}
              <style.ContainerScreen displayPhone={displayPhone}>
                <ImageNext
                  src={imageList[imageOrder]}
                  alt=""
                  width={'100%'}
                  height={'100%'}
                />
              </style.ContainerScreen>
            </style.ContainerImages>

            <style.ContainerIcons onClick={() => goToNextImage()}>
              <style.IconArrowIosBackOutlineInvert />
              <style.IconArrowIosBackOutlinePurpleInvert />
            </style.ContainerIcons>
          </style.ContainerSlider>
          <style.responsiveBox>
            <style.TextReponsive>{tittle}</style.TextReponsive>
            <style.TextInside>{description}</style.TextInside>
          </style.responsiveBox>
        </style.changeDisplay>
      </style.ContainerInside>
    </style.Container>
  )
}
export default ModalProject
