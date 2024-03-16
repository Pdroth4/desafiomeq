import React from 'react'
import * as S from './Main_style'

export default function Card(image, text) {
  return (
    
    <div>
      <img src={image} alt="" />
      <h2>{text}</h2>
      <button>Clique aqui</button>
    </div>
  )
}
