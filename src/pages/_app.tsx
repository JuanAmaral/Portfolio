import { useCookie, useEffectOnce } from 'react-use'
import axios from 'axios'
import { useRouter } from 'next/router'
import { setAppElement } from 'react-modal'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  const [lastVersion, updateVersion] = useCookie('app-version')
  const router = useRouter()

  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
