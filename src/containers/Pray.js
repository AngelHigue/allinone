import React, { useState, useEffect } from 'react'
import 'firebase/firestore'
import { useFirebaseApp } from 'reactfire'

export const Pray = () => {
  const [auth, setAuth] = useState(false)
  const [login, setLogin] = useState({
    user: '',
    password: '',
  })

  const hanldeLogin = () => {
    if (
      login.user == 'juanmarcos1304@gmail.com' &&
      login.password == '1304150821042511'
    ) {
      alert('Bienvido')
      setAuth(true)
    }
  }

  const singIn = event => {
    setLogin({ ...login, [event.target.name]: event.target.value })
  }

  //Intance firebase
  const firebase = useFirebaseApp()
  const db = firebase.firestore()

  //Fetch Data
  const [prayers, setPrayers] = useState([])
  useEffect(() => {
    const getPrayers = async () => {
      db.collection('oraciones').onSnapshot(querySnapshot => {
        const docs = []
        querySnapshot.forEach(doc => {
          docs.push({ id: doc.id, ...doc.data() })
        })
        setPrayers(docs)
      })
    }
    getPrayers()
  }, [])

  return (
    <React.Fragment>
      {!auth ? (
        <div style={{ backgroundColor: 'white', padding: '50px' }}>
          <label htmlFor="">Usuario</label>
          <input type="text" name="user" onChange={singIn} />
          <label htmlFor="">Contraseña</label>
          <input type="password" name="password" onChange={singIn} />
          <button onClick={hanldeLogin}>Ingresar</button>
        </div>
      ) : (
        <div
          style={{
            backgroundColor: 'white',
            padding: '50px',
            width: '100%',
            height: '100vh',
          }}>
          <center>
            <h1>Peticiones</h1>
            <hr />

            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Correo</th>
                  <th>País</th>
                  <th>Sexo</th>
                  <th>Edad</th>
                  <th>Petición</th>
                </tr>
              </thead>
              <tbody>
                {/* Registro */}
                {prayers.map(pray => (
                  <tr>
                    <td>{pray.name}</td>
                    <td>{pray.email}</td>
                    <td>{pray.contry}</td>
                    <td>{pray.sex}</td>
                    <td>{pray.age}</td>
                    <td>{pray.pray}</td>
                  </tr>
                ))}

                {/* Registro */}
              </tbody>
            </table>
          </center>
        </div>
      )}
    </React.Fragment>
  )
}
