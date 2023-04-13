import React from 'react'
import Head from 'next/head'
import '../styles/globals.css'
import "@fortawesome/fontawesome-pro/css/all.min.css"

export default function App({ Component, pageProps }) {

  const Layout = Component.layout || (({children})=> <>{children}</>)

  return (
    <React.Fragment>
      <Head>
        <title>DR Coding</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&family=Lexend&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant:wght@300;400;500;600;700&display=swap" rel="stylesheet"></link>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </React.Fragment>
  )
}
