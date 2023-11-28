
import Header from '../components/Header/Header'
import Main from '../components/Main/Main'
import Footer from '../components/Footer/Footer'
import './App.css'
import { useState } from 'react'

function App() {
const [lightmode, setLightmode] = useState(false);


  return (
    <div className={lightmode ? "lightmode" : null}>
      <Header lightmodeChange={setLightmode} lightmodeCheck={lightmode}/>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
