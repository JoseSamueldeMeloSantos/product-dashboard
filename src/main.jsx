import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './components/Card/Card.jsx'

import MainContent from './components/MainContent/MainContent.jsx'
import Button from './components/Button/Button.jsx'
import RoutesPath from './components/RoutesPath/RoutesPath.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  // <Card/>
    
    <MainContent/>
  
)
