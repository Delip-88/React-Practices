import './App.css'
import HomePage from './Components/HomePage'
import Nav from './Components/Nav'
import Card from './Components/Card'
import Bride from './Components/Bride'
import Countdown from './Components/Coutdown'
import Story from './Components/Story'
import Ourlove from './Components/Ourlove'
import Events from './Components/Events'
import Groomsmen from './Components/Groomsmen'
import RSVP from './Components/RSVP'
import Thank from './Components/Thank'
import Gallery from './Components/Gallery'

function App() {

  return (
    <>
    <Nav/>
     <HomePage/>
     <Bride/>
     <Card/>
     <Countdown/>
     <Story/>
     <Ourlove/>
     <Events/>
     <Groomsmen/>
     <Gallery/>
     <RSVP/>
     <Thank/>
    </>
  )
}

export default App
