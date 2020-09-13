import React from 'react'
import bg from '../assets/img/quienes-somos.jpg'

export const About = () => {
  return (
    <React.Fragment>
      <section
        style={{
          backgroundImage: "url('" + bg + "')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: '111%',
          height: '900px',
        }}
        id="conocenos"
        class="s-about">
        <div className="center" style={{ widht: '70%', float: 'center' }}>
          <div class="row section-header has-bottom-sep" data-aos="fade-up">
            <div class="col-full">
              <h3 style={{ color: 'white' }} class="subhead subhead--dark">
                ¿QUIÉNES
              </h3>
              <h1 class="display-1 display-1--light">SOMOS?</h1>
            </div>
          </div>

          <div class="row about-desc" data-aos="fade-up">
            <div style={{ color: 'white' }} class="col-full">
              <p>
                {/*Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt. */}
                Somos un grupo de jóvenes apasionados que busca compartir la
                gracia y el amor de Jesús siendo guiados por el poder del
                Espíritu Santo con el objetivo de que muchos crean en Jesús como
                su único Señor y Salvador. Creemos en la visión de nuestra
                iglesia, Casa de Dios: “Ir y hacer discípulos enseñándoles a
                guardar lo que Jesús nos mandó a través de grupos de amistad
                donde se nos enseña a dar la vida por nuestros amigos"
              </p>
            </div>
          </div>

          <div
            style={{ width: '50%' }}
            class="row about-stats stats block-1-3 block-m-1-2 block-mob-full"
            data-aos="fade-up">
            <div class="col-block stats__col ">
              <div class="stats__count">ALL</div>
              <h5 style={{ color: 'white' }}>Filipénses 4:13</h5>
            </div>
            <div class="col-block stats__col">
              <div class="stats__count">IN</div>
              <h5 style={{ color: 'white' }}>Mateo 6:9-15</h5>
            </div>
            <div class="col-block stats__col">
              <div class="stats__count">ONE</div>
              <h5 style={{ color: 'white' }}>Mateo 11:28</h5>
            </div>
          </div>
        </div>

        <div class="about__line"></div>
      </section>
    </React.Fragment>
  )
}
