import { useCookie, useEffectOnce } from 'react-use'
import { useRouter } from 'next/router'
export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
