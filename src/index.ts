import { createRoot } from 'react-dom/client'
import Root from './Root'
import './styles/_00-root.scss'
import config from './config'
import React from 'react'

const container = document.getElementById('app') as HTMLElement
const root = createRoot(container)

let app

if (config.building === 'false') {
  app = Root({})
} else {
  app = React.createElement('h1', null, 'Building...')
}

root.render(app)
