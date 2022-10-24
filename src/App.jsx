import React from 'react'
import Header from "./components/header/Header"
import Footer from './components/footer/Footer'
import Nav from './components/nav/Nav'
import Skills from './components/skills/Skills'
import Projects from './components/projects/Projects'
import Experiences from './components/experience/Experiences'
import About from './components/about/About'
import Contact from './components/contact/Contact'

const App = () => {
  return (
    <div>
        {/* <Nav /> */}
        <Header />
        <About isVariant={true} />
        <Projects />
        <Experiences isVariant={true} />
        <Skills />
        <Contact isVariant={true} />
        <Footer />
    </div>
  )
}

export default App


