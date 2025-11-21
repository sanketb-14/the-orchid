"use client"
import {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp } from 'lucide-react'

const TextCard = ({children}) => {
  const [isShowText, setIsShowText] = useState(false)
  const text = isShowText ? children : children.split(' ').slice(0, 25).join(' ') + '...'
  
  return (
    <div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        {text}
      </motion.span>
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className='btn btn-link text-primary gap-2 no-underline hover:underline ml-2'
        onClick={() => setIsShowText(!isShowText)}
      >
        {isShowText ? (
          <>
            Show Less <ChevronUp className="w-4 h-4" />
          </>
        ) : (
          <>
            Show More <ChevronDown className="w-4 h-4" />
          </>
        )}
      </motion.button>
    </div>
  )
}

export default TextCard
