import React, { createContext, useContext, useState } from 'react'

type SideBarContextType = {
  expandSideBar: boolean
  setexpandSideBar: (side: boolean) => void
}

export const SideBarContext = createContext({} as SideBarContextType)

export const SideBarProvider: React.FC = ({ children }) => {
  const [expandSideBar, setexpandSideBar] = useState(false)
  const context: SideBarContextType = {
    expandSideBar,
    setexpandSideBar,
  }
  return (
    <SideBarContext.Provider value={context}>
      {children}
    </SideBarContext.Provider>
  )
}

export const useSideBar = () => {
  const context = useContext(SideBarContext)
  return context
}
