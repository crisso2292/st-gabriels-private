import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import React from "react"
import theme from "../theme"
import "../styles/globals.css"
import Navbar from "../components/Navbar"
import Head from "next/head"
import Footer from "../components/Footer"
import LogRocket from "logrocket"
LogRocket.init("epmhfu/stgabriels")

/**
 * Component that overrides default App component to use Chakra UI
 * @constructor
 */
function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <>
      <Head>
        <title>Saint Gabriel Queens NY</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <ChakraProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  )
}

export default App
