import React from 'react'
import Button from '../Components/Button/Button'
import * as style from './style'
import JuanAmaral from '../assets/JuanAmaral.png'
import Ellenzinha from '../assets/Ellenzinha.png'
import Quina from '../assets/quina.png'
import Tryedu from '../assets/Tryedu.png'
import JogosSorte from '../assets/JogosSorte.png'
import Image from 'next/image'
import NavBar from '../Components/NavBar'
// import { Bola } from '../../Components/Bola';

export default function Home() {
  return (
    <style.Container>
      <NavBar />
      <style.NavBar>
        <style.ContentTittle>
          <style.Tittle color="white">Port</style.Tittle>
          <style.Tittle color="#711aff">folio.</style.Tittle>
        </style.ContentTittle>
      </style.NavBar>
      <style.ContentBanner>
        <style.ContainerText>
          <style.YellowTextBox />
          <style.NameTittle>Front-end Developer</style.NameTittle>
        </style.ContainerText>
        <style.TittleName color="white">Juan Amaral</style.TittleName>
        <style.SubTittle>
          Desenvolvedor de aplicativos web e native
        </style.SubTittle>
        <Button>Contate-me</Button>
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
        <style.ContainerText>
          <style.YellowTextBox />
          <style.NameTittle>Como funciona?</style.NameTittle>
        </style.ContainerText>
        <style.ContainerBox>
          <style.BoxInfo>
            <style.IconConnectWithoutContact />
            <style.SubTittle>Temos bate papo</style.SubTittle>
          </style.BoxInfo>
          <style.BoxInfo>
            <style.IconTargetArrow />
            <style.SubTittle>Definimos nossas metas </style.SubTittle>
          </style.BoxInfo>
          <style.BoxInfo>
            <style.IconCodeBlock />
            <style.SubTittle>Realizo o trabalho</style.SubTittle>
          </style.BoxInfo>
          <style.BoxInfo>
            <style.IconApprovalApp />
            <style.SubTittle>Aprovação e finalização</style.SubTittle>
          </style.BoxInfo>
        </style.ContainerBox>
        <style.ContainerText>
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
