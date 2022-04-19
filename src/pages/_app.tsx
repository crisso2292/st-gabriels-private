import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import React from "react"
import theme from "../theme"
import "../styles/globals.css"
import Navbar from "../components/Navbar"
/**
 * Component that overrides default App component to use Chakra UI
 * @constructor
 */
function App({ Component, pageProps }: AppProps): React.ReactNode {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App