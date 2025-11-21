"use client"
import { useFormStatus } from "react-dom"
import { motion } from "framer-motion"
import { Check, Loader2 } from "lucide-react"

export default function SubmitButton({ children, pendingLabel }) {
  const { pending } = useFormStatus()

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="btn btn-primary btn-lg gap-2 min-w-[200px]"
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          {pendingLabel}
        </>
      ) : (
        <>
          <Check className="w-5 h-5" />
          {children}
        </>
      )}
    </motion.button>
  )
}
