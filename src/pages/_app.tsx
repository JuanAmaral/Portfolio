import { useCookie, useEffectOnce } from 'react-use'
import { useRouter } from 'next/router'
import { SideBarProvider } from '../context/expandSideBar'
export default function App({ Component, pageProps }) {
  return (
    <SideBarProvider>
      <Component {...pageProps} />
    </SideBarProvider>
  )
}
