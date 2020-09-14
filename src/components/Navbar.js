import React from 'react'
import './css/Navbar.css'
import logo from '../assets/img/ALL-IN-ONE.png'

export const Navbar = () => {
  return (
    <React.Fragment>
      <header class="s-header">
        <div class="header-logo">
          <a class="site-logo" href="/">
            <img src={logo} alt="Homepage" />
          </a>
        </div>

        <section className="menu">
          <div className="menu-item">
            <a href="#conocenos">Conócenos</a>
          </div>
          <div className="menu-item">
            <a href="#congreso">Congreso</a>
          </div>
          <div className="menu-item">
            <a href="#involucrate">Regístrate</a>
          </div>
          <div className="menu-item">
            <a href="#oracion">Oración</a>
          </div>
          <div className="menu-item">
            <a href="#donativos">Donativos</a>
          </div>
        </section>
      </header>
    </React.Fragment>
  )
}
