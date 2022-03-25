import React from 'react'
import ReactDOM from 'react-dom'
import AppContainer from './App/AppContainer'
import { RecoilRoot } from 'recoil'

ReactDOM.render(
  <React.StrictMode>
    <RecoilRoot>
      <AppContainer />
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById('root')
)
