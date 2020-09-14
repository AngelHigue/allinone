import React from 'react'

export const Donations = () => {
  return (
    <React.Fragment>
      <section
        style={{
          backgroundColor: '#EFEFEF',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        }}
        id="donativos"
        class="s-contact">
        <footer>
          <div class="row footer-main">
            <div class="col-full">
              <h3
                style={{ color: 'black', marginTop: '-70px' }}
                class="h6 hide-on-fullwidth">
                Es en dar que recibimos.
              </h3>
              <h1 style={{ color: 'black' }} class="display-2 display-2--light">
                ¿Cómo realizar tus donativos?
              </h1>
            </div>

            <div class="col-six tab-full left footer-desc">
              <div class="footer-logo"></div>
              <p style={{ color: 'black', marginTop: '-50px' }}>
                Queremos agradecerte por tu aporte al grupo All In One. Gracias
                a tus donativos muchas personas están enconctrando a Jesús todo
                lo que se recaude servirá para poder llevar viveres a personas
                de escasos recursos y llevar un mensaje de amor y esperanza.
                Agradecemos tu generosidad y te invitamos a seguir siendo parte
                de todo lo que Dios esta haciendo por medio de tu ayuda.
              </p>
            </div>

            <div class="col-six tab-full right footer-subscribe">
              <h4></h4>
              <h4 style={{ color: 'black', marginBlockEnd: '10px' }}>
                Depósito Monetario
              </h4>
              <p style={{ color: 'black' }}>BAC 966154833</p>
              <p style={{ color: 'black', marginTop: '-35px' }}>
              Pablo Samuel Morales Tejeda
              </p>

              <h4 style={{ color: 'black', marginBlockEnd: '10px' }}>
                Transferencia
              </h4>
              <p style={{ color: 'black' }}>BAC 966154833</p>
              <p style={{ color: 'black', marginTop: '-35px' }}>
                Pablo Samuel Morales Tejeda
              </p>
            </div>
          </div>

          <div class="row footer-bottom">
            <div class="col-twelve">
              <div class="copyright">
                <span style={{ color: 'black', marginBlockEnd: '-110px' }}>
                  Cada uno debe dar según lo que haya decidido en su corazón, no
                  de mala gana ni por obligación, porque Dios ama al que da con
                  alegría.
                </span>
                <span style={{ color: 'black', marginTop: '70px' }}>
                  2 Corintios 9:7 | NVI
                </span>
              </div>

              <div class="go-top">
                <a class="smoothscroll" title="Back to Top" href="#top">
                  <i class="icon-arrow-up" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </React.Fragment>
  )
}
