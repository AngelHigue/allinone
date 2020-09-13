import React, { Suspense } from 'react' // Todos los archivos de react
import ReactDOM from 'react-dom' // Solo el punto de entrada
import { FirebaseAppProvider } from 'reactfire'
import { firebaseConfig } from './firebase-config'

// Estilos globales
import './assets/css/base.css'
import './assets/css/main.css'
import './assets/css/vendor.css'

// import 'bulma/css/bulma.css'

import { App } from './App/App'

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={<h3>Cargando..</h3>}>
      <App />
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById('app'),
)
