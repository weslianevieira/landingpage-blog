import React from 'react'
import wpp from '../../assets/app/whatsapp.png'

export default function WhatsappBtn() {
  return (
    <div>
        <a
          href="https://api.whatsapp.com/send?phone=5561991333071&text=Gostaria de saber sobre a disponibilidade de horário e preços. Preciso de ajudo com o seguinte incômodo:"
          target="_blank"
          style={{position:'fixed', bottom:'20px', right:'30px', width: '42px'}}>
        <img src={wpp} alt="Contato pelo WhatsApp" style={{ width: '48px'}} />
        </a>
      </div>
  )
}
