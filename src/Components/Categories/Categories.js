import React from 'react'
import { useState } from 'react'
import './categories.scss'
import {useSelector} from'react-redux'

const keywords = [
  'All',
  'React js',
  'Angular js', 
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Rock',
  'Alternative rock',
  'Sports',
  'Football',
  'World cup',
  'Metallica',
  'Nirvana',
  'Guns and Roses',
  'Coding',
  'Front end'
]

export default function Categories() {
  const [activeElement, setActiveElement] = useState('All')
  const darkMode = useSelector(state=>state.darkMode)

  const categoriesKeywords = keywords.map((category, i)=>{
    return <span key={i} 
    onClick={()=>setActiveElement(category)} 
    className={activeElement===category ? 'active' : ''}
    >
      {category}</span>
  })
  return (
    <div className={darkMode ? "categories light-mode" : "categories dark-mode"}>
      {categoriesKeywords}
    </div>
  )
}
