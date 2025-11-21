"use client"
import Link from "next/link";
import { motion } from "framer-motion";
import { LogIn, Sparkles } from "lucide-react";

function LoginMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-base-100 rounded-2xl shadow-xl overflow-hidden h-fit"
    >
      <div className="bg-gradient-to-br from-primary to-secondary p-12 text-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="inline-block mb-6"
        >
          <Sparkles className="w-20 h-20 text-primary-content" />
        </motion.div>
        
        <h3 className="text-3xl font-bold text-primary-content mb-4">
          Ready to Book?
        </h3>
        
        <p className="text-xl text-primary-content/90 mb-8">
          Please{' '}
          <Link 
            href="/login"
            className="underline underline-offset-4 font-bold hover:text-white transition-colors"
          >
            login
          </Link>
          {' '}to reserve this cabin right now
        </p>

        <Link href="/login">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-lg gap-3 bg-white text-primary hover:bg-base-100 border-0"
          >
            <LogIn className="w-6 h-6" />
            Login to Continue
          </motion.button>
        </Link>
      </div>

      <div className="p-8 space-y-4">
        <div className="flex items-center gap-3">
          <div className="badge badge-success badge-lg">✓</div>
          <span className="text-lg">Instant confirmation</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="badge badge-success badge-lg">✓</div>
          <span className="text-lg">Best price guarantee</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="badge badge-success badge-lg">✓</div>
          <span className="text-lg">24/7 customer support</span>
        </div>
      </div>
    </motion.div>
  );
}

export default LoginMessage;
