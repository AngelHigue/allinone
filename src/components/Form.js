import React, { useState } from 'react'
import 'firebase/firestore'
import { useFirebaseApp } from 'reactfire'

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
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100%',
        }}
        id="involucrate"
        class="s-contact">
        <div class="overlay"></div>
        <div class="contact__line"></div>

        <div class="row section-header" data-aos="fade-up">
          <div class="col-full">
            <h3 class="subhead">Involúcrate</h3>
            <h1 class="display-2 display-2--light">Sé parte de All In One</h1>
          </div>
        </div>

        <div class="row contact-content" data-aos="fade-up">
          <div class="contact-primary">
            <h3 class="h6">
              INGRESA TUS DATOS Y NOS COMUNICAREMOS CONTIGO PARA INVOLUCRARTE A
              NUESTRO GRUPO.
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
                  <button class="full-width btn--primary">Enviar</button>
                  <div class="submit-loader">
                    <div class="text-loader">Enviando...</div>
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
                ACERCARTE A JESÚS ES LA MEJOR DECISIÓN QUE HAZ TOMADO,
                EXPERIMENTARÁS SU INCOMPARABLE AMOR DE UNA MANERA GENUINA,
                SEGUIR A JESÚS NO ES UNA RELIGIÓN, ES TENER UNA RELACIÓN Y UN
                ESTILO DE VIDA QUE TE PERMITIRÁ TENER PAZ, AMOR Y FELICIDAD.
                PERMITENOS AYUDARTE EN ESTE NUEVO CAMINAR.
              </h3>

              <div class="cinfo">
                <h5>S. Juan 15:13</h5>
                <p>
                  Nadie tiene mayor amor que este, que uno ponga su vida por sus
                  amigos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}
