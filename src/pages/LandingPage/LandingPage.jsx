import React from 'react'
import { Navbar } from '../../components'
import { Accordion, Fitur, Harga, Header, Pembayaran } from '../../container'

const LandingPage = () => {
  return (
    <div>
    <Navbar />
    <Header />
    <Fitur />
    <Harga />
    <Accordion />
    <Pembayaran />
  </div>
  )
}

export default LandingPage