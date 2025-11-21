import { format, formatDistance, isPast, isToday, parseISO } from 'date-fns';
import { PencilSquareIcon } from '@heroicons/react/24/solid';
import DeleteReservation from './DeleteReservation';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Users, Clock, DollarSign } from 'lucide-react';

export const formatDistanceFromNow = (dateStr) =>
  formatDistance(parseISO(dateStr), new Date(), {
    addSuffix: true,
  }).replace('about ', '');

function ReservationCard({ booking , onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numNights,
    totalPrice,
    numGuests,
    status,
    created_at,
    cabins: { name, image },
  } = booking;

  const isPastBooking = isPast(new Date(startDate));

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
      transition={{ duration: 0.3 }}
      className="card bg-base-100 shadow-xl overflow-hidden"
    >
      <div className="grid md:grid-cols-3 gap-0">
        <div className="relative h-64 md:h-auto overflow-hidden">
          <Image
            src={image}
            fill
            alt={`Cabin ${name}`}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4">
            <motion.h3 
              className="text-2xl font-bold text-white mb-2"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Cabin {name}
            </motion.h3>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className={`badge badge-lg gap-2 ${isPastBooking ? 'badge-ghost' : 'badge-success'}`}
            >
              <Clock className="w-4 h-4" />
              {isPastBooking ? 'Past' : 'Upcoming'}
            </motion.div>
          </div>
        </div>

        <div className="md:col-span-2 p-6 space-y-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <h4 className="text-xl font-semibold flex items-center gap-2">
              <Calendar className="w-5 h-5 text-primary" />
              {numNights} Night Stay
            </h4>
            <motion.div 
              className="text-3xl font-bold text-primary flex items-center gap-2"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <DollarSign className="w-7 h-7" />
              {totalPrice}
            </motion.div>
          </div>

          <div className="divider my-2"></div>

          <div className="grid sm:grid-cols-2 gap-4">
            <motion.div 
              className="bg-base-200 rounded-xl p-4"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-sm text-base-content/70 mb-1">Check-in</p>
              <p className="font-semibold text-lg">
                {format(new Date(startDate), 'EEE, MMM dd yyyy')}
              </p>
              <p className="text-xs text-base-content/60 mt-1">
                {isToday(new Date(startDate)) ? 'Today' : formatDistanceFromNow(startDate)}
              </p>
            </motion.div>

            <motion.div 
              className="bg-base-200 rounded-xl p-4"
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-sm text-base-content/70 mb-1">Check-out</p>
              <p className="font-semibold text-lg">
                {format(new Date(endDate), 'EEE, MMM dd yyyy')}
              </p>
            </motion.div>
          </div>

          <div className="flex items-center gap-4 flex-wrap text-base-content/70">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              <span className="font-medium">{numGuests} guest{numGuests > 1 && 's'}</span>
            </div>
            <div className="badge badge-outline">
              Booked {format(new Date(created_at), 'MMM dd, yyyy')}
            </div>
          </div>

          {!isPastBooking && (
            <motion.div 
              className="flex gap-3 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <Link href={`/account/reservations/edit/${id}`} className="flex-1">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn btn-primary w-full gap-2"
                >
                  <PencilSquareIcon className="h-5 w-5" />
                  Edit
                </motion.button>
              </Link>
              <DeleteReservation bookingId={id} onDelete={onDelete} />
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export default ReservationCard;