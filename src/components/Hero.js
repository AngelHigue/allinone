import React from 'react'

/*import icono from '../assets/img/logo.png'*/
import bg from '../assets/img/BACKGRAUND.jpg'

export const Hero = () => {
  return (
    <React.Fragment>
      <section
        id="home"
        class="s-home target-section"
        data-parallax="scroll"
        data-image-src={bg}>
        <div class="overlay"></div>
        <div class="shadow-overlay"></div>

        <div class="home-content">
          <div class="row home-content__main">
            <h3>#AllInOne</h3>

            <h1 style={{ color: 'white' }}>OUR SEASON</h1>
            <h2 style={{ color: 'white', marginTop: '-15px' }}>
              DE PIE ANTE LO IMPOSIBLE
              <br />
            </h2>

            <div class="home-content__buttons">
              <a href="#involucrate" class="smoothscroll btn btn--stroke">
                REGISTRARSE
              </a>
              <a href="#speakers" class="smoothscroll btn btn--stroke">
                SPEAKERS
              </a>
            </div>
          </div>

          <div class="home-content__line"></div>
        </div>

        {/* Redes sociales */}
        <ul class="home-social">
          <li>
            <a href="https://www.facebook.com/105129697984629?referrer=whatsapp">
              <i class="fa fa-facebook" aria-hidden="true"></i>
              <span style={{ color: 'white' }}>Facebook</span>
            </a>
          </li>

          <li>
            <a href="https://instagram.com/allinone_gt?igshid=1q5amyv5myces">
              <i class="fa fa-instagram" aria-hidden="true"></i>
              <span style={{ color: 'white' }}>Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://api.whatsapp.com/send?phone=50251231535&text=Somos%20All%20In%20One,%20En%20Que%20Podemos%20Servirte?">
              <i class="fa fa-whatsapp" aria-hidden="true"></i>
              <span style={{ color: 'white' }}>WhatsApp</span>
            </a>
          </li>
          {/*<li>
            <a href="#0">
              <i class="fa fa-youtube" aria-hidden="true"></i>
              <span style={{ color: 'white' }}>YouTube</span>
            </a>
          </li>*/}
        </ul>
        {/* Fin Redes sociales */}
      </section>
    </React.Fragment>
  )
}
