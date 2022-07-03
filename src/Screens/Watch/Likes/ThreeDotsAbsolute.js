import React from 'react'
import '../VideoMetaData/VideoMetaData.scss'
import {BsDownload} from 'react-icons/bs'
import {BiCut} from 'react-icons/bi'
import './Likes.scss'

export default function ThreeDotsAbsolute() {
  return (
    <div className='ThreeDotsAbsolute'>
      <div className="like_element">
        <BsDownload size={25} /> <span>Download</span>
      </div>
      <div className="like_element">
        <BiCut size={25} /> <span>Clip</span>
      </div>
    </div>
  )
}
