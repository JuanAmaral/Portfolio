import React, { useState } from 'react'
import Button from '../Components/Button/Button'
import * as style from '../styles/style'
import JuanAmaral from '../assets/JuanAmaral.png'
import Ellenzinha from '../assets/Ellenzinha.png'
import Quina from '../assets/quina.png'
import Tryedu from '../assets/Tryedu.png'
import JogosSorte from '../assets/JogosSorte.png'
import Image from 'next/image'
import router from 'next/router'
// import { Bola } from '../../Components/Bola';
import { scroller } from 'react-scroll'

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
  return (
    <style.Container className="home">
      {/* <NavBar /> */}
      <style.FloatingBar>
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
      </style.FloatingBar>
      <style.NavBar>
        <style.ContentTittle>
          <style.Tittle color="white">Port</style.Tittle>
          <style.Tittle color="#711aff">folio.</style.Tittle>
        </style.ContentTittle>
      </style.NavBar>
      <style.ContentBanner>
        <style.TittleName color="white">Juan Amaral</style.TittleName>-
        <style.ContainerText>
          <style.YellowTextBox />
          <style.NameTittle>Front-end Developer</style.NameTittle>
        </style.ContainerText>
        <style.SubTittle>
          Desenvolvedor de aplicativos web e native
        </style.SubTittle>
        <Button style={{ zIndex: 999 }} onClick={openWapp}>
          Contate-me
        </Button>
        <style.ContainerImage>
          <Image
            src={JuanAmaral}
            alt="Picture of the author"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </style.ContainerImage>
        <style.ContainerText className="work">
          <style.YellowTextBox />
          <style.NameTittle>Como funciona?</style.NameTittle>
        </style.ContainerText>
        <style.ContainerBox>
          <style.BoxInfo>
            <style.IconConnectWithoutContact />
            <style.TextBox>Temos um bate papo</style.TextBox>
          </style.BoxInfo>
          <style.BoxInfo>
            <style.IconTargetArrow />
            <style.TextBox>Definimos nossas metas </style.TextBox>
          </style.BoxInfo>
          <style.BoxInfo>
            <style.IconCodeBlock />
            <style.TextBox>Realizo o trabalho</style.TextBox>
          </style.BoxInfo>
          <style.BoxInfo>
            <style.IconApprovalApp />
            <style.TextBox>Aprovação e finalização</style.TextBox>
          </style.BoxInfo>
        </style.ContainerBox>
        <style.ContainerText className="projects">
          <style.YellowTextBox />
          <style.NameTittle>Projetos já realizados</style.NameTittle>
        </style.ContainerText>
        <style.ContainerImages>
          <Image
            src={Ellenzinha}
            alt="Picture of the author"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
          <Image
            src={Quina}
            alt="Picture of the author"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
          <Image
            src={JogosSorte}
            alt="Picture of the author"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
          <Image
            src={Tryedu}
            alt="Picture of the author"
            width="100%"
            height="100%"
            layout="responsive"
            objectFit="contain"
          />
        </style.ContainerImages>
      </style.ContentBanner>
    </style.Container>
  )
}
