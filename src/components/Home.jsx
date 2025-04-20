import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Main from './Main'
import Footer from './Footer'

const Home = () => {

    const persona = {
        nombre:"martin",
        apellido:"cardozo",
        lenguajes:"html css",
        datos:"se crear paginas web"
    }
    let nombre = "pepito"
    let apellido = "cardozo"
    let lenguajes = "html, css, js"
    let datos = "puedo crear paginas dinamicas"
  return (
    <>
    <Header nombre={nombre}></Header>
    <Main persona={persona}></Main>
    <Footer></Footer>
    </>
  )
}

export default Home