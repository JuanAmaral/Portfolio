import React, { Component, useState, useEffect } from 'react'
import * as style from './style'
import Quina from '../../../public/assets/img/quina.png'
import Tryedu from '../../../public/assets/img/Tryedu.png'
import JogosSorte from '../../../public/assets/img/JogosSorte.png'
import { Effects3DImage } from '../Effects3DImage'
import { Effects3DImageTry } from '../Effects3DImageTry'
import { Effects3DImageQuina } from '../Effects3DImageQuina'

import ImageNext from '../ImageNext'
import ModalProject from '../ModalProject'
import Image, { ImageProps } from 'next/image'
import quina from '../../../public/assets/img/QuinaDashboard/QuinaDashboard1.png'
import quina2 from '../../../public/assets/img/QuinaDashboard/QuinaDashboard2.png'
import quina3 from '../../../public/assets/img/QuinaDashboard/QuinaDashboard3.png'
import tryedu from '../../../public/assets/img/TryEdu/tryedupsd.png'
import hub from '../../../public/assets/img/Hub/hub.png'

import ellenzinha from '../../../public/assets/img/EllenEffect/ellenzinha.png'
import otica from '../../../public/assets/img/Otica/Otica1.png'
export default function TabProjects() {
  const [expand, setExpand] = useState('proj1 | proj2 | proj3 | proj4 | none')
  // const [expand, setExpand] = useState('proj2')
  const [modalProject, setModalProject] = useState(false)
  function Expand(value: string) {
    expand == value ? setExpand('none') : setExpand(value)
  }
  function closeModal() {
    //setExpand('none')
    setExpand('none')
  }

  useEffect(() => {
    setExpand('none')
  }, [])

  return (
    <style.ContainerImages>
      <>
        <style.ExpandProjet>
          <style.ExpandRow>
            <style.TextBoxInside>Administrativo</style.TextBoxInside>
            <style.ButtonOpenProject onClick={() => setExpand('proj1')}>
              Saiba mais
            </style.ButtonOpenProject>
          </style.ExpandRow>
          <style.ContainerImagesNext>
            <Image
              src={quina}
              width={100}
              height={60}
              alt={'Administrativo'}
              objectFit="contain"
              layout="responsive"
            />
          </style.ContainerImagesNext>
        </style.ExpandProjet>
        <style.ExpandProjet>
          <style.ExpandRow>
            <style.TextBoxInside>Financeiro</style.TextBoxInside>
            <style.ButtonOpenProject onClick={() => setExpand('proj2')}>
              Saiba mais
            </style.ButtonOpenProject>
          </style.ExpandRow>
          <style.ContainerImagesNext>
            <Image
              src={quina2}
              width={100}
              height={60}
              alt={'Financeiro'}
              objectFit="contain"
              layout="responsive"
            />
          </style.ContainerImagesNext>
        </style.ExpandProjet>
        <style.ExpandProjet>
          <style.ExpandRow>
            <style.TextBoxInside>Vendas</style.TextBoxInside>
            <style.ButtonOpenProject onClick={() => setExpand('proj3')}>
              Saiba mais
            </style.ButtonOpenProject>
          </style.ExpandRow>
          <style.ContainerImagesNext>
            <Image
              src={quina3}
              width={100}
              height={60}
              alt={'Administrativo'}
              objectFit="contain"
              layout="responsive"
            />
          </style.ContainerImagesNext>
        </style.ExpandProjet>
        <style.ExpandProjet>
          <style.ExpandRow>
            <style.TextBoxInside>TryEdu</style.TextBoxInside>
            <style.ButtonOpenProject onClick={() => setExpand('proj4')}>
              Saiba mais
            </style.ButtonOpenProject>
          </style.ExpandRow>
          <style.ContainerImagesNext>
            <Image
              src={tryedu}
              width={100}
              height={60}
              alt={'Administrativo'}
              objectFit="contain"
              layout="responsive"
            />
          </style.ContainerImagesNext>
        </style.ExpandProjet>
        <style.ExpandProjet>
          <style.ExpandRow>
            <style.TextBoxInside>Ellenzinha</style.TextBoxInside>
            <style.ButtonOpenProject onClick={() => setExpand('proj5')}>
              Saiba mais
            </style.ButtonOpenProject>
          </style.ExpandRow>
          <style.ContainerImagesNext>
            <Image
              src={ellenzinha}
              width={100}
              height={60}
              alt={'Ellenzinha'}
              objectFit="contain"
              layout="responsive"
            />
          </style.ContainerImagesNext>
        </style.ExpandProjet>
        <style.ExpandProjet>
          <style.ExpandRow>
            <style.TextBoxInside>Hub</style.TextBoxInside>
            <style.ButtonOpenProject onClick={() => setExpand('proj6')}>
              Saiba mais
            </style.ButtonOpenProject>
          </style.ExpandRow>
          <style.ContainerImagesNext>
            <Image
              src={hub}
              width={100}
              height={60}
              alt={'Hub'}
              objectFit="contain"
              layout="responsive"
            />
          </style.ContainerImagesNext>
        </style.ExpandProjet>
        <style.ExpandProjet>
          <style.ExpandRow>
            <style.TextBoxInside>Ótica</style.TextBoxInside>
            <style.ButtonOpenProject onClick={() => setExpand('proj7')}>
              Saiba mais
            </style.ButtonOpenProject>
          </style.ExpandRow>
          <style.ContainerImagesNext>
            <Image
              src={otica}
              width={100}
              height={60}
              alt={'Otica'}
              objectFit="contain"
              layout="responsive"
            />
          </style.ContainerImagesNext>
        </style.ExpandProjet>

        {expand == 'proj1' && (
          <ModalProject
            closeModal={closeModal}
            tittle={'Quina Painel Administrativo'}
            description={
              'No painel sistema você gerencia usuários, inclusão, exclusão, e edição de diversos itens e tabelas. Minha participação foi a criação do contexto de autenticação e criação de 2 das 4 páginas compõe o sistema com CRUD (front-end).'
            }
            imageList={[
              require('../../../public/assets/img/QuinaDashboard/QuinaDashboard1.png'),
              require('../../../public/assets/img/QuinaDashboard/QuinaDashboard2.png'),
              require('../../../public/assets/img/QuinaDashboard/QuinaDashboard3.png'),
              require('../../../public/assets/img/QuinaDashboard/QuinaDashboard4.png'),
            ]}
            displayPhone={false}
          />
        )}
        {expand == 'proj2' && (
          <ModalProject
            closeModal={closeModal}
            tittle={'Quina Painel Financeiro'}
            description={
              'Neste sistema financeiro você pode visualizar os relatórios diários, semanais, mensais e também pesquisar dados por datas personalizadas visualizando diferentes relatórios utilizando filtros. Participei criando página inicial e alimentando os gráficos (front-end).'
            }
            imageList={[
              require('../../../public/assets/img/QuinaFinanceiro/QuinaFinanceiro1.png'),
              require('../../../public/assets/img/QuinaFinanceiro/QuinaFinanceiro2.png'),
              require('../../../public/assets/img/QuinaFinanceiro/QuinaFinanceiro3.png'),
              require('../../../public/assets/img/QuinaFinanceiro/QuinaFinanceiro4.png'),
            ]}
            displayPhone={true}
          />
        )}
        {expand == 'proj3' && (
          <ModalProject
            closeModal={closeModal}
            tittle={'Quina Ponto de venda'}
            description={
              'Esse sistema de venda é integrado com máquinas de cartão, possibilitando o usuário a realizar a venda e imprimindo seu comprovante. Paricipei realizando a exclusão, alimentação dos bilhetes e mudança de tema (front-end).'
            }
            imageList={[
              require('../../../public/assets/img/QuinaPontoVenda/QuinaPontoVenda1.png'),
              require('../../../public/assets/img/QuinaPontoVenda/QuinaPontoVenda2.png'),
              require('../../../public/assets/img/QuinaPontoVenda/QuinaPontoVenda3.png'),
              require('../../../public/assets/img/QuinaPontoVenda/QuinaPontoVenda4.png'),
            ]}
            displayPhone={true}
          />
        )}
        {expand == 'proj4' && (
          <ModalProject
            closeModal={closeModal}
            tittle={'TryEdu'}
            description={
              'Essa é a ferramenta que possibilita a criançla aprender de forma gamificado e seu professor acompanhar todos os relatórios hiper detalhados. Contribuí com quase todas as páginas do sistema, diretamente e indiretamente (front-end).'
            }
            imageList={[
              require('../../../public/assets/img/TryEdu/TryEdu1.png'),
              require('../../../public/assets/img/TryEdu/TryEdu2.png'),
              require('../../../public/assets/img/TryEdu/TryEdu3.png'),
              require('../../../public/assets/img/TryEdu/TryEdu4.png'),
            ]}
            displayPhone={true}
          />
        )}
        {expand == 'proj5' && (
          <ModalProject
            closeModal={closeModal}
            tittle={'Ellenzinha'}
            description={
              'Jogo de plataforma 2D com uma bela história cheio de referências da minha vida compartilhada com uma das pessoas que mais amo. Criação de todo o jogo (menos criação de áudio/algumas imagens)'
            }
            imageList={[
              require('../../../public/assets/img/EllenEffect/ellenzinha.png'),
              require('../../../public/assets/img/EllenEffect/ellenzinha.png'),
              require('../../../public/assets/img/EllenEffect/ellenzinha.png'),
              require('../../../public/assets/img/EllenEffect/ellenzinha.png'),
            ]}
            displayPhone={false}
          />
        )}
        {expand == 'proj6' && (
          <ModalProject
            closeModal={closeModal}
            tittle={'HUB Gerenciador'}
            description={
              'Hub é um gerenciador de servidores onde possui relatórios diários, semanais, mensais e também com datas personalizadas financeiros e técnicos. Contribui em todo o sistema fron-end. '
            }
            imageList={[
              require('../../../public/assets/img/Hub/Hub1.png'),
              require('../../../public/assets/img/Hub/Hub2.png'),
              require('../../../public/assets/img/Hub/Hub3.png'),
              require('../../../public/assets/img/Hub/Hub4.png'),
            ]}
            displayPhone={true}
          />
        )}
        {expand == 'proj7' && (
          <ModalProject
            closeModal={closeModal}
            tittle={'Ótica web commerce'}
            description={
              'E-Commerce desenvolvido em wordpress para cliente com necessidade de edição simplificada. Participei da criação de todo o front-end do projeto.'
            }
            imageList={[
              require('../../../public/assets/img/Otica/Otica1.png'),
              require('../../../public/assets/img/Otica/Otica2.png'),
              require('../../../public/assets/img/Otica/Otica3.png'),
              require('../../../public/assets/img/Otica/Otica4.png'),
            ]}
            displayPhone={false}
          />
        )}
      </>
    </style.ContainerImages>
  )
}
