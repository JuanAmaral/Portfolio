import React, { Component, useState, useEffect } from 'react'
import * as style from './style'
import Quina from '../../../public/assets/img/quina.png'
import Tryedu from '../../../public/assets/img/Tryedu.png'
import JogosSorte from '../../../public/assets/img/JogosSorte.png'
import { Effects3DImage } from '../Effects3DImage'
import { Effects3DImageTry } from '../Effects3DImageTry'
import { Effects3DImageQuina } from '../Effects3DImageQuina'

import ellen1 from '../../../public/assets/img/EllenEffect/ellen1.png'
import ellen2 from '../../../public/assets/img/EllenEffect/ellen2.png'
import ellen3 from '../../../public/assets/img/EllenEffect/ellen3.png'
import ellen4 from '../../../public/assets/img/EllenEffect/ellen4.png'

import tryedu1 from '../../../public/assets/img/TryEduEffect/tryedu1.png'
import tryedu2 from '../../../public/assets/img/TryEduEffect/tryedu2.png'
import tryedu3 from '../../../public/assets/img/TryEduEffect/tryedu3.png'
import tryedu4 from '../../../public/assets/img/TryEduEffect/tryedu4.png'

import quina1 from '../../../public/assets/img/QuinaEffect/quina1.png'
import quina2 from '../../../public/assets/img/QuinaEffect/quina2.png'
import quina3 from '../../../public/assets/img/QuinaEffect/quina3.png'
import quina4 from '../../../public/assets/img/QuinaEffect/quina4.png'

import ModalProject from '../ModalProject'
export default function TabProjects() {
  const [expand, setExpand] = useState('proj1 | proj2 | proj3 | proj4 | none')
  const [modalProject, setModalProject] = useState(false)
  function Expand(value: string) {
    expand == value ? setExpand('none') : setExpand(value)
  }
  function closeModal() {
    setExpand('none')
    setModalProject(false)
  }

  useEffect(() => {
    setExpand('proj2')
  }, [])

  return (
    <style.ContainerImages>
      <>
        {/* <div>
          <style.BoxInfo onClick={() => Expand('proj1')} expand={expand}>
            <style.IconReactjs />
            <style.TextBox>React</style.TextBox>
          </style.BoxInfo>
        </div> */}

        <div>
          <style.BoxInfo onClick={() => Expand('proj2')} expand={expand}>
            <style.IconNextdotjs />
            <style.TextBox>Nextjs</style.TextBox>
          </style.BoxInfo>

          <style.ExpandProjet expand={expand == 'proj2' ? true : false}>
            <style.ExpandRow>
              <style.TextBoxInside>Administrativo</style.TextBoxInside>
              <style.ButtonOpenProject onClick={() => setModalProject(true)}>
                Saiba mais
              </style.ButtonOpenProject>
            </style.ExpandRow>
            <Effects3DImageQuina
              img1={quina1}
              img2={quina2}
              img3={quina3}
              img4={quina4}
            />
          </style.ExpandProjet>
          {/* {modalProject && <ModalProject closeModal={closeModal} />} */}
          <style.ExpandProjet expand={expand == 'proj2' ? true : false}>
            <style.ExpandRow>
              <style.TextBoxInside>Financeiro</style.TextBoxInside>
              <style.ButtonOpenProject onClick={() => setModalProject(true)}>
                Saiba mais
              </style.ButtonOpenProject>
            </style.ExpandRow>
            <Effects3DImageQuina
              img1={quina1}
              img2={quina2}
              img3={quina3}
              img4={quina4}
            />
          </style.ExpandProjet>
          {/* {modalProject && <ModalProject closeModal={closeModal} />} */}
          <style.ExpandProjet expand={expand == 'proj2' ? true : false}>
            <style.ExpandRow>
              <style.TextBoxInside>Vendas</style.TextBoxInside>
              <style.ButtonOpenProject onClick={() => setModalProject(true)}>
                Saiba mais
              </style.ButtonOpenProject>
            </style.ExpandRow>
            <Effects3DImageQuina
              img1={quina1}
              img2={quina2}
              img3={quina3}
              img4={quina4}
            />
          </style.ExpandProjet>
          {modalProject && <ModalProject closeModal={closeModal} />}
        </div>

        {/* <style.BoxInfo>
          <style.IconWordpress />
          <style.TextBox>Wordpress</style.TextBox>
        </style.BoxInfo>
        <style.BoxInfo>
          <style.IconUnity />
          <style.TextBox>Unity</style.TextBox>
        </style.BoxInfo> */}

        {/* <style.ContainerExpandProjet onClick={() => Expand('proj1')}>
          <Effects3DImage
            img1={ellen1}
            img2={ellen2}
            img3={ellen3}
            img4={ellen4}
          />
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
          <Effects3DImageTry
            expand={expand == 'proj2' ? true : false}
            img1={tryedu1}
            img2={tryedu2}
            img3={tryedu3}
            img4={tryedu4}
          />
          <style.ExpandProjet expand={expand == 'proj2' ? true : false}>
            <style.TittleProject>Try Edu</style.TittleProject>
            <style.TextProject>
              Acompanhe, crie relatórios e atividade para seus alunos, gerencie
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
          <Effects3DImageQuina
            img1={quina1}
            img2={quina2}
            img3={quina3}
            img4={quina4}
          />
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
        </style.ContainerExpandProjet> */}
      </>
      {/* <style.ImageProject src={JogosSorte} layout={'responsive'} /> */}
    </style.ContainerImages>
  )
}
