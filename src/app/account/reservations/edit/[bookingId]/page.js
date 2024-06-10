import { updateBooking } from "@/app/_lib/action";
import { getBooking,getCabin } from "@/app/_lib/data-service";
import SubmitButton from "@/components/SubmitButton";


export default async function Page({params}) {
    // CHANGE
    
    const {bookingId} = params
    const {numGuests,observations,cabinId} = await getBooking(bookingId)
    const {maxCapacity} = await getCabin(cabinId)
  
    return (
      <div>
        <h2 className="font-semibold text-2xl text-accent mb-7">
          Edit Reservation #{bookingId}
        </h2>
  
        <form className="bg-base-200 py-8 px-12 text-lg flex gap-6 flex-col" action={updateBooking}>
            <input type="hidden" name="bookingId" value={bookingId}/>
          <div className="space-y-2">
            <label htmlFor="numGuests">How many guests?</label>
            <select
              name="numGuests"
              defaultValue={numGuests}
              id="numGuests"
              className="px-5 py-3 bg-base-300 text-primary w-full shadow-sm rounded-sm"
              required
            >
              <option value="" key="">
                Select number of guests...
              </option>
              {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
                <option value={x} key={x}>
                  {x} {x === 1 ? "guest" : "guests"}
                </option>
              ))}
            </select>
          </div>
  
          <div className="space-y-2">
            <label htmlFor="observations">
              Anything we should know about your stay?
            </label>
            <textarea
            defaultValue={observations}
              name="observations"
              className="px-5 py-3 bg-base-300 text-primary w-full shadow-sm rounded-sm"
            />
          </div>
  
        <SubmitButton pendingLabel="updating....">Update Reservation</SubmitButton>
        </form>
      </div>
    );
  }