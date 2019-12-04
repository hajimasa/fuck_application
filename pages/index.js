import React from 'react'
import Head from 'next/head'
import Nav from '../components/nav'

const Home = () => (
  <div>
    
    <Head>
      <title key="title">令和</title>
      <link href="https://fonts.googleapis.com/css?family=M+PLUS+1p&display=swap" rel="stylesheet"></link>
    </Head>

    <div className="hero">
      <marquee behavior="alternate" className="title">\ 祝 令 和 /</marquee>
    </div>
    
    <Nav />

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }

      .title {
        color: #f33;
        margin: 0;
        width: 100%;
        padding-top: 10px;
        font-size: 80px;
        // text-align: center;
        font-family: 'M PLUS 1p', sans-serif;
      }
    `}</style>
  </div>
)

export default Home
