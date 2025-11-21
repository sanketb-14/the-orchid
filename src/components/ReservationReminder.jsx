"use client"
import { XMarkIcon } from '@heroicons/react/24/solid';
import { format } from 'date-fns';
import { useReservation } from './ReservationContext';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, X } from 'lucide-react';

function ReservationReminder() {
  const {range, resetRange} = useReservation()

  if (!range.from || !range.to) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className='fixed bottom-6 left-1/2 -translate-x-1/2 z-50'
      >
        <motion.div 
          className='bg-base-100 shadow-2xl rounded-2xl p-6 flex gap-6 items-center max-w-2xl border-2 border-primary'
          whileHover={{ scale: 1.02 }}
        >
          <Calendar className="w-8 h-8 text-primary flex-shrink-0" />
          <div>
            <p className="font-bold text-lg mb-1">👋 Don't forget to reserve!</p>
            <p className="text-base-content/70">
              {format(new Date(range.from), 'MMM dd, yyyy')} → {format(new Date(range.to), 'MMM dd, yyyy')}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            onClick={resetRange}
            className='btn btn-circle btn-ghost flex-shrink-0'
          >
            <X className='w-6 h-6' />
          </motion.button>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default ReservationReminder;