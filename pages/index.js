import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my site!" />
        <p className="description">
          <a href="https://www.gofinds.org/" rel"dofollow">gofinds</a> is an online media & internet service industry namely <a href="https://www.gofinds.org/" rel"dofollow">Informations, Health, Lifestyle, Finance, Travel and Automotive</a> 
        </p>
      </main>

      <Footer />
    </div>
  )
}
