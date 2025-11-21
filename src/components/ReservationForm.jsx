"use client"
import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createBooking } from "@/app/_lib/action"
import SubmitButton from "./SubmitButton";
import { motion } from "framer-motion";
import { User, Users, MessageSquare, Sparkles } from "lucide-react";

function ReservationForm({cabin, user}) {
  const {maxCapacity, regularPrice, discount, id} = cabin;
  const {range, resetRange} = useReservation()
  const startDate = range.from
  const endDate = range.to

  const numNights = differenceInDays(endDate, startDate)
  const cabinPrice = numNights * (regularPrice - discount)

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice,
    cabinId: id,
  }

  const createBookingData = createBooking.bind(null, bookingData)
  
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-base-100 rounded-2xl shadow-xl overflow-hidden"
    >
      <div className="bg-gradient-to-r from-secondary to-accent p-6">
        <h3 className="text-2xl font-bold text-secondary-content flex items-center gap-3">
          <Sparkles className="w-7 h-7" />
          Complete Your Reservation
        </h3>
        <p className="text-secondary-content/80 mt-2">Just a few more details...</p>
      </div>

      <div className="p-6 space-y-6">
        <motion.div 
          className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-5"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-sm text-base-content/70 mb-2 flex items-center gap-2">
            <User className="w-4 h-4" />
            Logged in as
          </p>
          <div className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="bg-primary text-primary-content rounded-full w-12">
                <span className="text-xl">{user.name.charAt(0)}</span>
              </div>
            </div>
            <span className="text-xl font-bold">{user.name}</span>
          </div>
        </motion.div>

        <form 
          action={async (formData) => {
            await createBookingData(formData)
            resetRange()
          }}
          className="space-y-6"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <label className="label">
              <span className="label-text text-lg font-semibold flex items-center gap-2">
                <Users className="w-5 h-5 text-primary" />
                How many guests?
              </span>
            </label>
            <select
              name="numGuests"
              required
              className="select select-bordered w-full select-lg"
            >
              <option value="">Select number of guests...</option>
              {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
                <option key={x} value={x}>
                  {x} {x === 1 ? 'guest' : 'guests'}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <label className="label">
              <span className="label-text text-lg font-semibold flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-primary" />
                Anything we should know about your stay?
              </span>
            </label>
            <textarea
              name="observations"
              className="textarea textarea-bordered w-full h-32 text-base"
              placeholder="Any special requests or dietary requirements?"
            />
          </motion.div>

          <motion.div 
            className="flex justify-end items-center gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {(!startDate || !endDate) ? (
              <div className="alert alert-warning">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>Start by selecting dates</span>
              </div>
            ) : (
              <SubmitButton pendingLabel="Reserving...">
                Reserve Now
              </SubmitButton>
            )}
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
}

export default ReservationForm;