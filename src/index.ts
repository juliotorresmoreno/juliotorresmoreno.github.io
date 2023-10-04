import { createRoot } from 'react-dom/client'
import Root from './Root'
import config from './config'
import React from 'react'
import './styles/index.scss'

const container = document.getElementById('app') as HTMLElement
const root = createRoot(container)

let app: React.ReactNode

if (config.building === 'false') {
  app = Root({})
} else {
  app = React.createElement('h1', null, 'Building...')
}

root.render(app)
