import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";

import ReservationList from "@/components/ReservationList";
import Link from "next/link";

export const metadata = {
    title :'Reservations'
}
export default async function Page() {
  const session = await auth()

  
    
  // CHANGE
  const bookings = await getBookings(session.user.guestId)
  console.log(bookings);

  return (
    <div>
      <h2 className="font-semibold text-2xl text-primary mb-7">
        Your reservations
      </h2>

      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservations yet. Check out our{" "}
          <Link className="link link-accent" href="/rooms">
            luxury cabins &rarr;
          </Link>
        </p>
      ) : (
       <ReservationList bookings={bookings}/>
      )}
    </div>
  );
}