"use client"
import {useFormStatus} from 'react-dom'

const SubmitButton = ({children,pendingLabel}) => {
  const {pending } = useFormStatus()
  return (
    <div className="flex justify-end items-center gap-6">
    <button className="btn btn-accent  font-semibold hover:bg-accent-focus transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
      {pending ? pendingLabel : children}
    </button>
  </div>
  )
}

export default SubmitButton
