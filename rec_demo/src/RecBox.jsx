import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function RecBox() {
  return (
    <div id='outer-rec-box'>
      <h2>Use Something Old to Find Something New!</h2>
      <h4>Enter the name of a movie, show, podcast, book, or game that you like and select what type of media it is. Click find to get some recs!</h4>
    <div id='inner-rec-box'>
      <input type='text' id='item-name' placeholder='Enter the name here:' />

      <label for="item-type">Choose media type:</label>
      <select name="item-type" id="item-type">
        <option value="">-- Please select an option --</option>
        <option value="movie">Movie</option>
        <option value="show">Show</option>
        <option value="podcast">Podcast</option>
        <option value="book">Book</option>
        <option value="game">Game</option>
      </select>
    </div>
    </div>
  )
  
}

export default RecBox