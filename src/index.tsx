import React from 'react'
import { BrowserRouter, Router } from 'react-router-dom'
import ReactDOM from 'react-dom'
import history from 'shared/history'

import Layouts from './layouts/Layouts'
import * as serviceWorker from './serviceWorker'
import 'semantic-ui-css/semantic.min.css'
import 'assets/styles/global.css'

ReactDOM.render(
  <BrowserRouter>
    <Router history={history}>
      <Layouts />
    </Router>
  </BrowserRouter>,
  document.getElementById('root'),
)

serviceWorker.unregister()
