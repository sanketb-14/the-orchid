import { getCabin, getCabins } from "@/app/_lib/data-service";
import Loader from "@/components/Loader";
import Reservations from "@/components/Reservations";
import TextCard from "@/components/TextCard";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";



export async function generateMetadata({params}){
    const {name} = await getCabin(params.roomID)
    return {title: `Room ${name}`}
}
export async function generateStaticParams(){
    const cabins = await getCabins()
    const ids  = cabins.map((cabin) => ({roomID : String(cabin.id)}))
    return ids
}

export default async function Page({params}) {
  const cabin = await getCabin(params.roomID)
    
  
  const { id, name, maxCapacity, regularPrice, discount, image, description } =
    cabin;

  return (
    <div className="max-w-6xl mx-auto mt-8 bg-base-200 card p-2 shadow-xl">
      <div className="grid grid-cols-[3fr_4fr] gap-12 card-body w-full mb-24 ">
        <div className="relative scale-[1.15] -translate-x-3 ">
          <Image src={image} fill className="object-cover rounded-xl shadow-xl "alt={`Cabin ${name}`} />
        </div>

        <div className="flex flex-col">
          <h3 className="text-accent font-black text-5xl mb-5 translate-x-[-254px] bg-transparent text-center p-4  pb-1 w-[150%]">
            Cabin {name}
          </h3>

          <p className="text-lg text-primary mb-10">{<TextCard>{description}</TextCard>}</p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-secondary" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-secondary" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Lonavala</span> (India)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-secondary" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2 className="text-5xl font-semibold text-center mb-4 text-secondary">
          Reserve today {name}. Pay on arrival.
        </h2>
        <Suspense fallback={<Loader/>}>
        <Reservations cabin={cabin}/>

        </Suspense>
        

      </div>
    </div>
  );
}