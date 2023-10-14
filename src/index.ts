import { createRoot } from 'react-dom/client'
import Root from './Root'
import config from './config'
import React from 'react'
import './styles/global.css'
import './styles/index.css'

const container = document.getElementById('app') as HTMLElement
const root = createRoot(container)

let app: React.ReactNode

if (config.building === 'true') {
  app = React.createElement('h1', null, 'Building...')
} else {
  app = Root({})
}

root.render(app)
