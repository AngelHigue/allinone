import React, { useState } from 'react'
import 'firebase/firestore'
import { useFirebaseApp } from 'reactfire'

export const Pray = () => {
  //Intance firebase
  const firebase = useFirebaseApp()
  const db = firebase.firestore()

  const [data, setData] = useState({
    name: '',
    email: '',
    country: '',
    sex: '',
    age: '',
    pray: '',
  })

  const handleData = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const [showMessage, setShowMessage] = useState(false)

  const hanldeSubmbit = async event => {
    event.preventDefault()

    db.collection('oraciones')
      .add({
        name: data.name,
        email: data.email,
        country: data.country,
        sex: data.sex,
        age: data.age,
        pray: data.pray,
      })
      .then(refDoc => {
        setShowMessage(true)
      })
      .catch(error => {
        alert('Error al eviar petición')
      })
  }

  return (
    <React.Fragment>
      <section
        style={{
          backgroundColor: '#BDBDBD',
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        }}
        id="oracion"
        class="s-contact">
        <div class="overlay"></div>
        <div style={{ backgroundColor: '#00eebd' }} class="contact__line"></div>

        <div class="row section-header" data-aos="fade-up">
          <div class="col-full">
            <h1 class="display-2 display-2--light">Oramos por ti</h1>

            <h3 style={{ color: 'white' }} class="h6 hide-on-fullwidth">
              Envía tu petición y junto a un equipo intercesión estaremos orando
              por ella.
            </h3>
          </div>
        </div>

        <div class="row contact-content" data-aos="fade-up">
          <div class="contact-primary">
            <h3 class="h6">
              PARA ENVIAR TU PETICIÓN DEBES LLENAR EL SIGUIENTE FORMULARIO:
            </h3>

            <form method="post" onSubmit={hanldeSubmbit}>
              <fieldset>
                <div class="form-field">
                  <input
                    name="name"
                    onChange={handleData}
                    value={data.name}
                    type="text"
                    placeholder="Tu nombre"
                    minlength="2"
                    required
                    aria-required="true"
                    class="full-width"
                  />
                </div>

                <div class="form-field">
                  <input
                    name="email"
                    onChange={handleData}
                    value={data.email}
                    type="email"
                    placeholder="Tu Email"
                    required
                    aria-required="true"
                    class="full-width"
                  />
                </div>
                <div class="form-field">
                  <input
                    name="country"
                    onChange={handleData}
                    value={data.country}
                    type="text"
                    placeholder="Tu Pais"
                    class="full-width"
                  />
                </div>
                <div class="form-field">
                  <input
                    name="sex"
                    onChange={handleData}
                    value={data.sex}
                    type="text"
                    placeholder="Tu Sexo"
                    class="full-width"
                  />
                </div>
                <div class="form-field">
                  <input
                    name="age"
                    onChange={handleData}
                    value={data.age}
                    type="text"
                    placeholder="Tu Edad"
                    class="full-width"
                  />
                </div>
                <div class="form-field">
                  <textarea
                    name="pray"
                    onChange={handleData}
                    value={data.pray}
                    placeholder="Escribe tu Petición"
                    rows="10"
                    cols="150"
                    required
                    aria-required="true"
                    style={{ width: '890px' }}
                    class="full-width"></textarea>
                </div>
                <div class="form-field">
                  <button
                    style={{ backgroundColor: '#00eebd', border: 'none' }}
                    class="full-width btn--primary">
                    Enviar Petición
                  </button>
                  <div class="submit-loader">
                    <div class="s-loader">
                      <div class="bounce1"></div>
                      <div class="bounce2"></div>
                      <div class="bounce3"></div>
                    </div>
                  </div>
                </div>
              </fieldset>
            </form>
            {showMessage ? (
              <span
                style={{
                  background: '#3298dc',
                  padding: '10px',
                  fontSize: '20px',
                  color: 'white',
                }}>
                Te petición se ha enviado correctamente
              </span>
            ) : (
              ''
            )}
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
