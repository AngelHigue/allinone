import React, { useState } from 'react'
import 'firebase/firestore'
import { useFirebaseApp } from 'reactfire'
import bg from '../assets/img/BACKGRAUND.jpg'

export const Form = () => {
  //Intance firebase
  const firebase = useFirebaseApp()
  const db = firebase.firestore()

  const [data, setData] = useState({
    name: '',
    age: '',
    phone: '',
    email: '',
  })

  const handleData = event => {
    setData({ ...data, [event.target.name]: event.target.value })
  }

  const [showMessage, setShowMessage] = useState(false)

  const hanldeSubmbit = async event => {
    event.preventDefault()

    db.collection('integrantes')
      .add({
        name: data.name,
        age: data.age,
        phone: data.phone,
        email: data.email,
      })
      .then(refDoc => {
        setShowMessage(true)
      })
      .catch(error => {
        alert('Error al registrarse')
        console.log(error)
      })
  }

  return (
    <React.Fragment>
      <section
        
        style={{
          backgroundImage: "url('" + bg + "')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: '115%',
        }}
        id="involucrate"
        class="s-contact">
        <div class="overlay"></div>
        <div class="contact__line"></div>

        <div class="row section-header" data-aos="fade-up">
          <div class="col-full">
            <h3 class="subhead">Regístrate</h3>
            <h1 class="display-2 display-2--light">Sé parte de OUR SEASON</h1>
          </div>
        </div>

        <div class="row contact-content" data-aos="fade-up">
          <div class="contact-primary">
            <h3 class="h6">
              INGRESA TUS DATOS PARA REGISRTARTE.
            </h3>

            <form onSubmit={hanldeSubmbit}>
              <fieldset>
                <div class="form-field">
                  <input
                    name="name"
                    onChange={handleData}
                    type="text"
                    placeholder="Tu Nombre"
                    value={data.name}
                    required
                    aria-required="true"
                    class="full-width"
                  />
                </div>
                <div class="form-field">
                  <input
                    name="age"
                    type="number"
                    onChange={handleData}
                    placeholder="Tu Edad"
                    value={data.age}
                    required
                    aria-required="true"
                    class="full-width"
                  />
                </div>
                <div class="form-field">
                  <input
                    name="phone"
                    type="number"
                    onChange={handleData}
                    placeholder="Tu Teléfono"
                    value={data.phone}
                    class="full-width"
                  />
                </div>
                <div class="form-field">
                  <input
                    name="email"
                    type="email"
                    onChange={handleData}
                    placeholder="Correo Electronico"
                    value={data.email}
                    required
                    aria-required="true"
                    class="full-width"
                  />
                </div>
                <div class="form-field">
                  <button class="full-width btn--primary">Registrarse</button>
                  <div class="submit-loader">
                    <div class="text-loader">Registrando...</div>
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
                Te has registrado correctamente
              </span>
            ) : (
              ''
            )}
          </div>

          <div class="contact-secondary">
            <div class="contact-info">
              <h3 class="h6 hide-on-fullwidth">
                SI DESEAS REGISTRARTE, LLENA EL SIGUIENTE FORMULARIO
                PARA FORMAR PARTE DE ESTA INCREIBLE EXPERIENCIA.
              </h3>

              <div class="cinfo">
                <h5>Jeremías 29:11</h5>
                <p>
                Pues yo sé los planes que tengo para ustedes —dice el Señor—. 
                Son planes para lo bueno y no para lo malo, para darles un futuro y una esperanza.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
