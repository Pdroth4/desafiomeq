import React from 'react'
import * as S from './Main_style'
import bigmac1 from '../../assets/bigmac.svg'
import bigmac2 from '../../assets/bigmac2.svg'
import  fries  from '../../assets/batata.svg'
import icecream from '../../assets/sorvete.svg'
import card1 from '../../assets/card1.svg'
import card2 from '../../assets/card2.svg'
import card3 from '../../assets/card3.svg'

export default function Main() {
  return (
    <S.Main>
      <section>
        <div className='itemMain'>
            <img src={bigmac1} alt="" />

            <div className='textMain'>
            <h1>BATEU AQUELA <span>#FOME</span> DE <span>MÉQUI</span>? </h1>
        </div>
        </div>


        <div className="itens">

            <img className='bgmc' src={bigmac2} alt="" />
            <img src={fries} alt="" />
            <img className='ice'  src={icecream} alt="" />
        </div>
      </section>

      <section className='sectionCards'>

        <div className="subTitle"></div>



      </section>
    </S.Main>
  )
}
