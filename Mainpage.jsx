import React, {useState} from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Collections from '../components/Collections'
import Footer from '../components/Footer'

import { Gents, Ladies } from '../data'

import Womencollections from '../components/Womencollections'


const Mainpage = () => {

  const[gentsfashion, setGentsFashion] = useState(Gents)
  const[LadiesFashion, setLadiesFashion] = useState(Ladies)

  console.log(Gents)

  return (
    <div>
      <Header />
      <Banner />
      <Collections gentsfashion={gentsfashion}/>
      <Womencollections LadiesFashion={LadiesFashion}/>
      <Footer />
    </div>
  )
}

export default Mainpage
