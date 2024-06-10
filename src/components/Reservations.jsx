import DateSelector from "./DateSelector"
import ReservationForm from "./ReservationForm"
import { getSettings,getBookedDatesByCabinId } from "@/app/_lib/data-service"
import { auth } from "@/app/_lib/auth"
import LoginMessage from "./LoginMessage"
async function Reservations({cabin}){
    const session = await auth()
    const [ settings , bookedDatesByCabinId] = await Promise.all([ getSettings() , getBookedDatesByCabinId(cabin.id)])
   return ( <div className="grid grid-cols-2 gap-8 p-2 min-h-7xl">
        <DateSelector setting={settings} bookedDate={bookedDatesByCabinId} cabin={cabin}/>
        {session?.user ? <ReservationForm user={session.user} cabin={cabin}/>:<LoginMessage/>}

        </div>)
}
export default Reservations