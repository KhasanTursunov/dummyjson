import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Body from './components/body/Body'
import Navbar from './components/header/Navbar'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
    <Body/>
    <Footer/>
    </>
  );
}

export default App
