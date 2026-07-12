import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  fetch("https://tastedive.com/api/similar?q=beyond+evil&type=show&k=1075196-SA-B2132ABD")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error=>console.error(error));
}

export default App

