/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
// import App from "next/app";
import type { AppProps /*, AppContext */ } from 'next/app'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { SessionProvider } from 'next-auth/react'
import { AnimatePresence } from 'framer-motion'
import 'antd/dist/antd.css'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps, router }: AppProps) => {
  return (
    <SessionProvider session={pageProps.session}>
      <AnimatePresence exitBeforeEnter>
        <Provider store={store}>
          <Component {...pageProps} key={router.asPath} />
        </Provider>
      </AnimatePresence>
    </SessionProvider>
  )
}

export default MyApp
