import React, { useEffect, useState } from 'react'
import * as style from '../styles/style'
import JuanAmaral from '../../public/assets/img/JuanAmaral.png'

import Image from 'next/image'
import router from 'next/router'
// import { Bola } from '../../Components/Bola';
import { scroller } from 'react-scroll'
import TabProjects from '../Components/TabProjects'
import TabWork from '../Components/TabWork'
import ImageNext from '../Components/ImageNext'

export default function Home() {
  const [menu, setMenu] = useState('home | work | projects')
  const openWapp = () => {
    const phoneNumber = 62992911658
    window.open(
      `https://api.whatsapp.com/send?phone=55${phoneNumber}&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20seu%20site%20e%20quero%20criar%20um%20app%2Fsite.%20`
    )
  }
  const scrollToSection = (className: string) => {
    scroller.scrollTo(className, {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart',
    })
  }

  useEffect(() => {
    setMenu('home')
  }, [])

  return (
    <style.Container className="home">
      {/* <NavBar /> */}

      <style.FloatingBarMobile>
        <style.IconHome
          onClick={() => {
            setMenu('home')
            scrollToSection('home')
          }}
          active={menu == 'home' ? true : false}
        />
        <style.IconUsers
          onClick={() => {
            setMenu('work')
            scrollToSection('work')
          }}
          active={menu == 'work' ? true : false}
        />
        <style.IconFolders
          onClick={() => {
            setMenu('projects')
            scrollToSection('projects')
          }}
          active={menu == 'projects' ? true : false}
        />
      </style.FloatingBarMobile>
      <>
        <style.NavBar>
          <style.ContentTittle>
            <style.Tittle color="white">Port</style.Tittle>
            <style.Tittle color="#711aff">folio.</style.Tittle>
          </style.ContentTittle>
          <style.MenuTopLandscape>
            <style.TextMenuTop
              onClick={() => {
                setMenu('home')
                scrollToSection('home')
              }}
            >
              INICIO
            </style.TextMenuTop>
            <style.TextMenuTop
              onClick={() => {
                setMenu('work')
                scrollToSection('work')
              }}
            >
              CONTRATE
            </style.TextMenuTop>
            <style.TextMenuTop
              onClick={() => {
                setMenu('projects')
                scrollToSection('projects')
              }}
            >
              TRABALHOS
            </style.TextMenuTop>
          </style.MenuTopLandscape>
        </style.NavBar>
      </>

      <style.ContentBanner>
        <style.ContainerTopBox>
          <div>
            <style.TittleName color="white">Juan Amaral</style.TittleName>-
            <style.ContainerText>
              <style.YellowTextBox />
              <style.NameTittle>Front-end Developer</style.NameTittle>
            </style.ContainerText>
            <style.TittleNameLandscape color="white">
              Juan Amaral
            </style.TittleNameLandscape>
            <style.SubTittle>
              Desenvolvedor de aplicativos web e native
            </style.SubTittle>
            <style.StyledButton onClick={openWapp}>
              Contate-me
            </style.StyledButton>
            <style.TextCurriculum>Currículo</style.TextCurriculum>
          </div>
          <div>
            <style.ContainerImage>
              <ImageNext
                src={JuanAmaral}
                alt="Juan Amaral Picture"
                width={'20rem'}
                height={'100%'}
              />
            </style.ContainerImage>
          </div>
        </style.ContainerTopBox>
        <>
          <style.ContainerText className="work">
            <style.YellowTextBox />
            <style.NameTittle>Como funciona?</style.NameTittle>
          </style.ContainerText>
          <TabWork />
        </>
        <>
          <style.ContainerText className="projects">
            <style.YellowTextBox />
            <style.NameTittle>Projetos já realizados</style.NameTittle>
          </style.ContainerText>
          <TabProjects />
        </>
      </style.ContentBanner>
    </style.Container>
  )
}
