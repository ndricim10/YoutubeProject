import React from 'react'
import {AiFillFacebook} from 'react-icons/ai'
import { fbLogin } from '../../Redux/Actions/fbAction'

export default function LoginFb() {
  return (
    <>
    <div className='fb'>
    <AiFillFacebook size={30} color="blue"/>
    </div>
    </>
  )
}
