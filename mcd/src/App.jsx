import React from 'react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import * as S from './components/Header/Header_style'

export default function App() {
  return (
    <div>
      <S.GlobalStyle/>
      <Header/>
      <Main/>
    </div>
  )
}
