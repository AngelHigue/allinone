import React from 'react'
import bg from '../assets/img/background6.jpg'
import img from '../assets/img/Recurso 1.png'
import img2 from '../assets/img/our season.png'
import img3 from '../assets/img/plenaria.png'
import img4 from '../assets/img/talleres.png'
import img5 from '../assets/img/musica.png'
import img6 from '../assets/img/participantes.png'
import img7 from '../assets/img/Recurso 8.png'
import img8 from '../assets/img/Recurso 9.png'

export const Features = () => {
  return (
    <React.Fragment>
      <section
        style={{
          backgroundImage: "url('" + bg + "')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: '115%',
        }}
        id="congreso"
        class="s-contact background-shadow">
        <div class="row section-header has-bottom-sep" data-aos="fade-up">
          <div class="col-full">
            <center>
              <div className="right" style={{ widht: '30%', float: 'center' }}>
                <img
                  style={{ marginTop: '-180px', marginBlockEnd: '-110px' }}
                  src={img}
                  alt=""
                  width="900px"
                />
              </div>
            </center>
          </div>
        </div>

        <div class="row services-list block-1-2 block-tab-full">
          {/*<img
            style={{ float: 'left', marginTop: '-180px', marginBlockEnd: '-110px' }}
            src={img}
            alt=""
            width="900px"
          />*/}
          
          {/*<iframe
            style={{
              float: 'left',
              borderRadius: '15px 15px 15px 15px',
              paddingBottom: '50px',
            }}
            width="600"
            height="400"
            src="https://www.youtube.com/embed/bIv5mIksNX0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="true"></iframe>*/}

          <div class="col-block service-item" data-aos="fade-up">
            <div class="service-icon">
              <img src={img2} alt="" width="45px" />
            </div>
            <div class="service-text">
              <h3 style={{ color: '00eebd' }} class="h2">
                ¿Qué es Our Season?
              </h3>
              <p style={{ color: 'white' }}>
                Our Season, es un congreso que te preparará para esta nueva
                temporada de pandemia en casa. Aprenderás a escuchar a Dios, a
                aprovechar el tiempo en las cosas espirituales, podrás romper
                paradigmas y empezar a hacer cosas que antes no hacías; a buscar
                a Dios de una forma diferente, lo que transformará tu vida de
                una forma sobrenatural.
              </p>
            </div>
          </div>

          <div class="col-block service-item" data-aos="fade-up">
            <div class="service-icon">
              <img src={img3} alt="" width="50px" />
            </div>
            <div class="service-text">
              <h3 style={{ color: '00eebd' }} class="h2">
                Plenarias
              </h3>
              <p style={{ color: 'white' }}>
                El congreso contará con la participación especial de
                conferencistas nacionales e internacionales quienes impartirán
                la palabra de Dios por medio de distintas plenarias a lo largo
                del evento.
              </p>
            </div>
          </div>

          <div class="col-block service-item" data-aos="fade-up">
            <div class="service-icon">
              <img src={img4} alt="" width="40px" />
            </div>
            <div class="service-text">
              <h3 style={{ color: '00eebd' }} class="h2">
                Talleres
              </h3>
              <p style={{ color: 'white' }}>
                Se realizarán talleres en los que se expondrán temas específicos
                para hombres y mujeres, con el objetivo de guiarte en diferentes
                aspectos de tu vida.
              </p>
            </div>
          </div>

          <div class="col-block service-item" data-aos="fade-up">
            <div class="service-icon">
              <img src={img5} alt="" width="45px" />
            </div>
            <div class="service-text">
              <h3 style={{ color: '00eebd' }} class="h2">
                Música
              </h3>
              <p style={{ color: 'white' }}>
                Habrán sesiones de adoración las cuales estarán a cargo de Josh
                Gámez, en donde podrás adorar a Dios en espíritu y en verdad.
              </p>
            </div>
          </div>

          <div class="col-block service-item" data-aos="fade-up">
            <div class="service-icon">
              <img src={img6} alt="" width="45px" />
            </div>
            <div class="service-text">
              <h3 style={{ color: '00eebd' }} class="h2">
                Disponibilidad
              </h3>
              <p style={{ color: 'white' }}>
                Este año ha sido un año de muchos retos y hemos tenido que
                evolucionar en las nuevas formas de hacer iglesia; es por ello,
                que el congreso estará disponible para todo público en cualquier
                parte del mundo, por medio de una plataforma digital. Las
                personas que deseen asistir al congreso en línea, podrán acceder
                de forma gratuita del 02-03 de octubre, para lo cual deberán
                registrarse en nuestra página oficial.
              </p>
            </div>
          </div>

          <div class="col-block service-item" data-aos="fade-up">
            <div class="service-icon">
              <img src={img7} alt="" width="40px" />
            </div>
            <div class="service-text">
              <h3 style={{ color: '00eebd' }} class="h2">
                Fecha
              </h3>
              <img
            style={{ float: 'left', marginTop: '45px', marginBlockEnd: '-110px' }}
            src={img8}
            alt=""
            width="900px"
          />
            </div>
          </div>

          
        </div>
      </section>
    </React.Fragment>
  )
}
