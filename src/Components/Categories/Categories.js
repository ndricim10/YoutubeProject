import React from 'react'
import { useState } from 'react'
import './categories.scss'

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

  const [activeElement, setActiveElement] = useState('React js')
  function handleClick(category){
    setActiveElement(category)
  }

  const categoriesKeywords = keywords.map((category, i)=>{
    return <span key={i} 
    onClick={()=>setActiveElement(category)} 
    className={activeElement===category ? 'active' : ''}
    >
      {category}</span>
  })
  return (
    <div className='categories'>
      {categoriesKeywords}
    </div>
  )
}
