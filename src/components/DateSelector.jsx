"use client"
import { differenceInDays, isPast, isSameDay, isWithinInterval } from "date-fns";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { useReservation } from "./ReservationContext";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, DollarSign, X, Sparkles } from "lucide-react";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((date) =>
      isWithinInterval(date, { start: range.from, end: range.to })
    )
  );
}

function DateSelector({cabin , bookedDate , setting}) {
  
  const {range , setRange,resetRange} = useReservation()

  const displayRange = isAlreadyBooked(range,bookedDate)? {} : range

  const {regularPrice , discount} = cabin
  const numNights = differenceInDays(range.to , range.from)

  const cabinPrice = numNights * (regularPrice - discount)

  const {minBookingLength, maxBookingLength} = setting

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col gap-6"
    >
      <motion.div 
        className="bg-base-100 rounded-2xl shadow-xl overflow-hidden"
        whileHover={{ boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="bg-gradient-to-r from-primary to-secondary p-6">
          <h3 className="text-2xl font-bold text-primary-content flex items-center gap-3">
            <Calendar className="w-7 h-7" />
            Select Your Dates
          </h3>
          <p className="text-primary-content/80 mt-2">Choose your perfect getaway dates</p>
        </div>

        <div className="p-6">
          <DayPicker
            className="pt-4 place-self-center"
            mode="range"
            onSelect={setRange}
            selected={displayRange}
            min={minBookingLength + 1}
            max={maxBookingLength}
            fromMonth={new Date()}
            fromDate={new Date()}
            toYear={new Date().getFullYear() + 5}
            captionLayout="dropdown"
            numberOfMonths={2}
            disabled={(curDate) => isPast(curDate) || bookedDate.some((date) => isSameDay(date,curDate))}
          />
        </div>
      </motion.div>

      <motion.div 
        className="bg-base-100 rounded-2xl shadow-xl p-6 space-y-6"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center gap-3 pb-4 border-b border-base-300">
          <DollarSign className="w-6 h-6 text-primary" />
          <h4 className="text-xl font-semibold">Pricing Details</h4>
        </div>

        <motion.div 
          className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-xl p-6"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="flex items-center justify-between">
            <span className="text-base-content/70 text-lg">Per Night</span>
            <div className="text-right">
              {discount > 0 ? (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="flex items-center gap-3"
                >
                  <span className="badge badge-success badge-lg gap-2">
                    <Sparkles className="w-4 h-4" />
                    Save ${discount}
                  </span>
                  <div>
                    <div className="text-3xl font-bold text-primary">
                      ${regularPrice - discount}
                    </div>
                    <div className="text-sm line-through text-base-content/50">
                      ${regularPrice}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="text-3xl font-bold text-primary">
                  ${regularPrice}
                </div>
              )}
            </div>
          </div>

          <AnimatePresence>
            {numNights > 0 && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 pt-6 border-t border-base-content/10 space-y-3"
              >
                <div className="flex justify-between text-lg text-base-content/70">
                  <span>× {numNights} nights</span>
                  <span className="font-semibold">${cabinPrice}</span>
                </div>
                <motion.div 
                  className="flex justify-between text-2xl font-bold"
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                >
                  <span>Total</span>
                  <span className="text-primary">${cabinPrice}</span>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <AnimatePresence>
          {(range.from || range.to) && (
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-outline btn-error w-full gap-2 text-lg"
              onClick={resetRange}
            >
              <X className="w-5 h-5" />
              Clear Selection
            </motion.button>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

export default DateSelector;