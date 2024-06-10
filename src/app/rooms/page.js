import CabinList from "@/components/CabinList";
import { Suspense } from "react";
import Loader from "@/components/Loader";
import Filter from "@/components/FilterRooms";
import ReservationReminder from "@/components/ReservationReminder";
// export const revalidate = 3600
export const metadata = {
    title:"Rooms"
}


const Page =({searchParams}) => {
  const params = searchParams?.capacity ?? "all"


  
    

    return (
      <div>
        <h1 className="text-4xl mb-5 text-accent font-medium">
          Our Luxury Orchid-Rooms
        </h1>
        <p className="text-primary text-lg mb-10">
          Cozy yet luxurious Rooms, located right in the heart of the Lonavala city. Imagine waking up to beautiful mountain views, spending your
          days exploring the dark forests around, or just relaxing in your private
          hot tub under the stars. Enjoy nature's beauty in your own little home
          away from home. The perfect spot for a peaceful, calm vacation. Welcome
          to paradise.
        </p>
        <div className="w-full m-2 flex justify-end ">
          <Filter/>
        </div>
        <Suspense fallback={<Loader/> } key={params}>
        <CabinList params={params}/>
        <ReservationReminder/>
        </Suspense>
  
       
      </div>
    );
}

export default Page
