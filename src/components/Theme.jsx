import React from 'react'
import Navbar from './Navbar'
import '../styles/Theme.css'

function Theme() {
  return (
    <div>
        <label htmlFor="theme" className="theme">
            <span className="theme__toggle-wrap">
                <input id="theme" className="theme__toggle" type="checkbox" role="switch"  name="theme"/>
                <span className="theme__fill"></span>
                <span className="theme__icon">
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                    <span className="theme__icon-part"></span>
                </span>
            </span>
        </label>
    </div>
  )
}

export default Theme