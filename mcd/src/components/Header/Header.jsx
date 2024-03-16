


import React from 'react'
import logo from '../../assets/logo.svg'
import cel1 from '../../assets/cel1.svg'
import cel2 from '../../assets/cel2.svg'

import * as S from './Header_style'

export default function Header() {
  return (
    <S.Header>
        
        <img  className='logoMC' src={logo} alt="" />

        <section>
        <div className="downloadApp">
            <img src={cel1} alt="" />
            <p>Baixe o App</p>
        </div>
            
            
       <div className="order">
            <h3>Peça seu Méqui</h3>
            <img src={cel2} alt="" />
       </div>

        </section>

    </S.Header>
  )
}