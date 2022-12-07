import {Heebo} from '@next/font/google'
import type {AppProps} from 'next/app'
import {ThemeProvider} from "styled-components";
import {Layout} from "../components/layout";
import {GlobalStyle, theme} from "../theme";

const heebo = Heebo({
  weight: ['400', '500', '700', '600'],
  subsets: ['latin', 'hebrew']
})

export default function App({Component, pageProps}: AppProps) {
  return (
    <div className={heebo.className}>
      <GlobalStyle/>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </div>
  )
}
