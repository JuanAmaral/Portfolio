import React, { useContext, useEffect, useState } from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
import { SideBarContext } from '../../context/expandSideBar'
import { NavBarData } from './navBarData'
import * as navStyle from './style'

//import { convertUserProfile } from '../utils/convertUserType';

// export const ExpandSideBar = () => {

// };

type dadosMenu = {
  title: string
  clickOn: (() => void) | string
  icon: React.ReactNode
  cName: string
  permissions?: string[]
}

function NavBar() {
  const { expandSideBar, setexpandSideBar } = useContext(SideBarContext)
  // const { user } = useAuth();
  // const showSidebar = () => setExpandSideBar(!expandSideBar);
  const [dados, setDados] = useState<dadosMenu[]>([])
  const fetchDados = () => {
    const response = NavBarData()
    setDados(response)
  }
  useEffect(() => {
    fetchDados()
  }, [])

  const handleLogout = () => {
    window.localStorage.removeItem('@GDSK:user')
    window.localStorage.removeItem('@GDSK:domain')
    window.localStorage.removeItem('@GDSK:server')
    window.location.href = '/'
  }

  return (
    <>
      <navStyle.navbar>
        <navStyle.menuBars>
          <navStyle.MenuIcon onClick={() => setexpandSideBar(!expandSideBar)} />
        </navStyle.menuBars>
      </navStyle.navbar>
      <navStyle.navMenuActive expandSideBar={expandSideBar}>
        {dados.map((item, index) => (
          <div key={`nav-item@${index}`}>
            <navStyle.button
              onClick={() => {
                if (item.title == 'Logout') {
                  // handleLogout()
                } else {
                  if (typeof item.clickOn === 'function') {
                    item.clickOn()
                  } else {
                    // navigate(item.clickOn)
                  }
                }
              }}
            >
              <navStyle.icon style={{ color: 'gray' }}>
                {item.icon}
              </navStyle.icon>
              {/* <navStyle.text>{item.title}</navStyle.text> */}
            </navStyle.button>
          </div>
        ))}
      </navStyle.navMenuActive>
    </>
  )
}

export default NavBar
