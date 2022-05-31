import React, { Component, useState } from 'react'
import * as style from './style'
import Ellenzinha from '../../assets/Ellenzinha.png'
import Quina from '../../assets/quina.png'
import Tryedu from '../../assets/Tryedu.png'
import JogosSorte from '../../assets/JogosSorte.png'
import Effects from '../../Components/Effects'
import ellen1 from '../../assets/EllenEffect/ellen1.png'
import ellen2 from '../../assets/EllenEffect/ellen2.png'
import ellen3 from '../../assets/EllenEffect/ellen3.png'
import ellen4 from '../../assets/EllenEffect/ellen4.png'
export default function TabProjects() {
  const [expand, setExpand] = useState('proj1 | proj2 | proj3 | proj4 | none')
  function Expand(value: string) {
    expand == value ? setExpand('none') : setExpand(value)
  }
  return (
    <style.ContainerImages>
      <>
        <style.ContainerExpandProjet onClick={() => Expand('proj1')}>
          <div style={{ width: '100%' }}>
            {/* <style.ImageProject src={Ellenzinha} layout={'responsive'} /> */}
            <Effects />
          </div>

          <style.ExpandProjet expand={expand == 'proj1' ? true : false}>
            <style.TittleProject>Ellen project</style.TittleProject>
            <style.TextProject>
              Ellenzinha é um jogo de plataforma 2D de aventura e nele você pode
              ajudar a ellen a salvar os animais e desbrenvar um mundo mágico,
              você pode conferi-lo aqui:
            </style.TextProject>
            <style.ButtonLink
              onClick={() => window.open('https://jogo.juanamaral.com.br/')}
            >
              Jogar navegador
            </style.ButtonLink>
            <style.ButtonLink
              onClick={() =>
                window.open(
                  'https://play.google.com/store/apps/details?id=com.juanamaral.ellenzinha'
                )
              }
            >
              Acessar PlayStore
            </style.ButtonLink>
          </style.ExpandProjet>
        </style.ContainerExpandProjet>
      </>
      <>
        <style.ContainerExpandProjet onClick={() => Expand('proj2')}>
          {' '}
          <style.ImageProject src={Tryedu} layout={'responsive'} />
          <style.ExpandProjet expand={expand == 'proj2' ? true : false}>
            <style.TittleProject>Try Edu</style.TittleProject>
            <style.TextProject>
              Acompanhe e crie relatórios e atividade para seus alunos, gerencie
              turmas com essa extensão de sala de aula, confira:
            </style.TextProject>
            <style.ButtonLink
              onClick={() => window.open('https://teentok.com.br/')}
            >
              Acessar navegador
            </style.ButtonLink>
            <style.ButtonLink
              onClick={() =>
                window.open(
                  'https://play.google.com/store/apps/details?id=com.tryedu.AppTryEduAndroid&hl=pt_BR&gl=US'
                )
              }
            >
              Acessar PlayStore
            </style.ButtonLink>
          </style.ExpandProjet>
        </style.ContainerExpandProjet>
      </>
      <>
        <style.ContainerExpandProjet onClick={() => Expand('proj3')}>
          {' '}
          <style.ImageProject src={Quina} layout={'responsive'} />
          <style.ExpandProjet expand={expand == 'proj3' ? true : false}>
            <style.TittleProject>Quina</style.TittleProject>
            <style.TextProject>
              Um projeto empresarial com 3 sistemas de jogos da corrida de
              cavalado, cambistas vendiam jogos com cartao na primeira
              plataforma, em seguida temos o gerenciador da corrida onde
              cadastrava os cavalos no evento e por ultimo um preciso relatório
              financeiro com gráficos.
            </style.TextProject>
          </style.ExpandProjet>
        </style.ContainerExpandProjet>
      </>
      <style.ImageProject src={JogosSorte} layout={'responsive'} />
    </style.ContainerImages>
  )
}
