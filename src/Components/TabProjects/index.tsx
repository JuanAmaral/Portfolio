import React, { Component } from 'react'
import * as style from './style'
import Ellenzinha from '../../assets/Ellenzinha.png'
import Quina from '../../assets/quina.png'
import Tryedu from '../../assets/Tryedu.png'
import JogosSorte from '../../assets/JogosSorte.png'

export default function TabProjects() {
  return (
    <style.ContainerImages>
      <style.ContainerExpandProjet>
        <div style={{ width: '100%' }}>
          <style.ImageProject src={Ellenzinha} layout={'responsive'} />
        </div>
        <style.ExpandProjet>
          <style.TittleProject>Ellen project</style.TittleProject>
          <style.TextProject>
            Ellenzinha é um jogo de plataforma 2D de aventura e nele você pode
            ajudar a ellen a salvar os animais e desbrenvar um mundo mágico,
            você pode conferi-lo aqui:
          </style.TextProject>
          <div
            onClick={() =>
              window.open(
                'https://play.google.com/store/apps/details?id=com.juanamaral.ellenzinha'
              )
            }
          ></div>
        </style.ExpandProjet>
      </style.ContainerExpandProjet>
      <style.ImageProject src={Quina} layout={'responsive'} />
      <style.ImageProject src={JogosSorte} layout={'responsive'} />
      <style.ImageProject src={Tryedu} layout={'responsive'} />
    </style.ContainerImages>
  )
}
