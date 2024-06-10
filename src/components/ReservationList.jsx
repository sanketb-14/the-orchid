"use client"
import { deleteBooking } from '@/app/_lib/action'
import ReservationCard from './ReservationCard'
ReservationCard
import {useOptimistic} from 'react'

const ReservationList = ({bookings}) => {
  const [ optimisticBookings , optimisticDelete] = useOptimistic(bookings , (currBooking , bookingId) => {
    return currBooking.filter((booking) => booking.id !== bookingId)
  } )

  async function handleDelete(bookingId){
    optimisticDelete(bookingId)
    await deleteBooking(bookingId)
  }
  return (
    <ul className="space-y-6">
          {optimisticBookings.map((booking) => (
            <ReservationCard onDelete={handleDelete}booking={booking} key={booking.id} />
          ))}
        </ul>
  )
}

export default ReservationList
