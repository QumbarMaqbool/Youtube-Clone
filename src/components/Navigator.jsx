import React from 'react'
import '../styles/Navigat.css'
import Theme from './Theme'

function Navigator({items}) {

  return (
    <div className='navigator'>
        <dl className='sideBar'>
        <div className="navbar-brand">
          <img src="\src\assets\Logo.png" height="30" alt="Logo"/>
        </div>
        <dt><img className='homeIcon' src="\src\assets\home.png"/> Home</dt>
        <dt><img className='short' src="\src\assets\shorts.png"/> Shorts</dt>
        <dt><img className='sub' src="\src\assets\sub.png"/> Subscribe</dt>
        <hr />
        <h5>You &gt;</h5>
        <div>
          {items.map((item, index) => (
            <dt key={index}><img className='sub' src={item.icon} alt="Item Icon" />{item.title}</dt>
          ))}
        </div>
       </dl>
    </div>
  )
}

export default Navigator