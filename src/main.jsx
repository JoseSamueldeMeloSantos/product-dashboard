import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Card from './components/Card/Card.jsx'
import { Button } from 'bootstrap'
import MainContent from './components/MainContent/MainContent.jsx'

createRoot(document.getElementById('root')).render(
  // <Card/>
  // <MainContent/>
  <Button>Button</Button>
)
