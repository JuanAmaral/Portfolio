import React, { Component } from 'react'
import * as style from './style'

export default function TabWork() {
  return (
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
        <style.TextBox>Revisão e aprovação</style.TextBox>
      </style.BoxInfo>
    </style.ContainerBox>
  )
}
