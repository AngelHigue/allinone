import React from 'react'

import { Navbar } from '../components/Navbar'
import { Hero } from '../components/Hero'
import { Features } from '../components/Features'
import { Form } from '../components/Form'
import { Contact } from '../components/Contact'
import { About } from '../components/About'
import { Speakers } from '../components/Speakers'
import { Pray } from '../components/Pray'
import { Donations } from '../components/Donations'


export const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Speakers />
      <Form />
      <Pray />
      <Donations />
      <Contact />
    </React.Fragment>
  )
}
