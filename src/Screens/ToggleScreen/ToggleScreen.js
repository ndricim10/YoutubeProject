import React from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import './toggleScreen.scss'

export default function ToggleScreen() {
  return (
    <div className='toggleScreen'>
        <div className="leftToggle">
        <Sidebar size={23}/>
        </div>
        <div className='rightToggle'></div>
    </div>
  )
}
