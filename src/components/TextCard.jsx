"use client"
import {useState} from 'react'

const TextCard = ({children}) => {
    const [isShowText , setIsShowText] = useState(false)
    const text = isShowText ? children : children.split(' ').slice(0,25).join(' ')
  return (
    <span>
        {text}
        <button className='btn text-lg text-secondary link' onClick={()=>setIsShowText(!isShowText)}>{isShowText ? "show- less" : " show-more"}</button>
      
    </span>
  )
}

export default TextCard
