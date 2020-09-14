import React, { useState, useEffect } from 'react'
import 'firebase/firestore'
import { useFirebaseApp } from 'reactfire'

export const Participants = () => {
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
  const [members, setMembers] = useState([])
  useEffect(() => {
    const getParticipants = async () => {
      db.collection('integrantes').onSnapshot(querySnapshot => {
        const docs = []
        querySnapshot.forEach(doc => {
          docs.push({ id: doc.id, ...doc.data() })
        })
        setMembers(docs)
      })
    }
    getParticipants()
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
            <h1>Participantes registrados</h1>
            <hr />

            <table>
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Edad</th>
                  <th>Teléfono</th>
                  <th>Correo</th>
                </tr>
              </thead>
              <tbody>
                {/* Registro */}
                {members.map(participant => (
                  <tr>
                    <td>{participant.name}</td>
                    <td>{participant.age}</td>
                    <td>{participant.phone}</td>
                    <td>{participant.email}</td>
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
