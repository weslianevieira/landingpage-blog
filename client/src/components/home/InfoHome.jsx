import React from 'react'
import './home.css'
import icon1 from '../../assets/home/hernia-lombar.webp'
import icon2 from '../../assets/home/bursite-trocanteriana.webp'
import icon3 from '../../assets/home/escoliose.webp'

const InfoHome = () => {
   return (
      <section className='diferenciais'>
         <div className="center">
            <h2>Tratamento de Dores Relacionadas à Coluna</h2>
            <div className='icons-diferenciais'>

               <div className='box-single-diferenciais'>
                  <img src={icon1} alt='icon1' />
                  <h3>Hérnias Lombares e Cervicais</h3>
               </div>

               <div className='box-single-diferenciais'>
                  <img src={icon2} alt='icon2' />
                  <h3>Bursite Trocantérica e Dores Sacroilíacas</h3>
               </div>

               <div className='box-single-diferenciais'>
                  <img src={icon3} alt='icon3' />
                  <h3>Escoliose</h3>
               </div>
            </div>
         </div>
      </section>
   )
}

export default InfoHome
