import { getCabin, getCabins } from "@/app/_lib/data-service";
import Reservations from "@/components/Reservations";
import TextCard from "@/components/TextCard";
import { EyeSlashIcon, MapPinIcon, UsersIcon, SparklesIcon, CheckCircleIcon, WifiIcon, TvIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Suspense } from "react";

export async function generateMetadata({params}){
    const {name} = await getCabin(params.roomID)
    return {title: `Room ${name}`}
}

export async function generateStaticParams(){
    const cabins = await getCabins()
    const ids = cabins.map((cabin) => ({roomID : String(cabin.id)}))
    return ids
}

// Reservation Skeleton Loader
function ReservationSkeleton() {
  return (
    <div className="bg-base-100 rounded-2xl p-8 shadow-lg space-y-6">
      <div className="space-y-4">
        <div className="h-8 bg-base-300 rounded-lg w-48 animate-pulse"></div>
        <div className="grid grid-cols-2 gap-4">
          <div className="h-32 bg-base-300 rounded-xl animate-pulse"></div>
          <div className="h-32 bg-base-300 rounded-xl animate-pulse"></div>
        </div>
      </div>
      <div className="space-y-3">
        <div className="h-6 bg-base-300 rounded w-32 animate-pulse"></div>
        <div className="h-12 bg-base-300 rounded-xl animate-pulse"></div>
      </div>
      <div className="h-14 bg-primary/30 rounded-xl w-full animate-pulse"></div>
      <div className="flex justify-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    </div>
  );
}

export default async function Page({params}) {
  const cabin = await getCabin(params.roomID)
  const { id, name, maxCapacity, regularPrice, discount, image, description } = cabin;

  return (
    <div className="min-h-screen py-8 px-4">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Image Section */}
          <div className="relative h-[400px] lg:h-[600px] rounded-3xl overflow-hidden shadow-2xl group">
            <Image 
              src={image} 
              fill 
              className="object-cover group-hover:scale-105 transition-transform duration-700" 
              alt={`Cabin ${name}`} 
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-base-300/90 via-transparent to-transparent"></div>
            
            {/* Floating Price Badge */}
            <div className="absolute top-6 right-6 bg-base-100/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
              <div className="text-center">
                {discount > 0 ? (
                  <>
                    <div className="text-3xl font-bold text-primary">${regularPrice - discount}</div>
                    <div className="text-sm line-through text-error opacity-70">${regularPrice}</div>
                  </>
                ) : (
                  <div className="text-3xl font-bold text-primary">${regularPrice}</div>
                )}
                <div className="text-xs text-base-content/60 mt-1">per night</div>
              </div>
            </div>

            {/* Room Name Overlay */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 bg-base-100/95 backdrop-blur-md rounded-2xl p-4 shadow-xl">
                <SparklesIcon className="w-8 h-8 text-accent" />
                <div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-base-content">
                    {name}
                  </h1>
                  <p className="text-sm text-base-content/60">Luxury Accommodation</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-center space-y-8">
            {/* Description */}
            <div className="bg-base-100 rounded-2xl p-6 shadow-lg">
              <h2 className="text-2xl font-bold text-base-content mb-4 flex items-center gap-2">
                <SparklesIcon className="w-6 h-6 text-accent" />
                About This Room
              </h2>
              <div className="text-base-content/80 leading-relaxed">
                <TextCard>{description}</TextCard>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-base-100 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow flex items-center gap-4">
                <div className="bg-primary/10 rounded-full p-3">
                  <UsersIcon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-base-content/60">Capacity</p>
                  <p className="text-lg font-bold text-base-content">Up to {maxCapacity} guests</p>
                </div>
              </div>

              <div className="bg-base-100 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow flex items-center gap-4">
                <div className="bg-secondary/10 rounded-full p-3">
                  <MapPinIcon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <p className="text-sm text-base-content/60">Location</p>
                  <p className="text-lg font-bold text-base-content">Lonavala, India</p>
                </div>
              </div>

              <div className="bg-base-100 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow flex items-center gap-4">
                <div className="bg-success/10 rounded-full p-3">
                  <EyeSlashIcon className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-sm text-base-content/60">Privacy</p>
                  <p className="text-lg font-bold text-base-content">100% Guaranteed</p>
                </div>
              </div>

              <div className="bg-base-100 rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow flex items-center gap-4">
                <div className="bg-info/10 rounded-full p-3">
                  <CheckCircleIcon className="h-6 w-6 text-info" />
                </div>
                <div>
                  <p className="text-sm text-base-content/60">Payment</p>
                  <p className="text-lg font-bold text-base-content">On Arrival</p>
                </div>
              </div>
            </div>

            {/* Amenities */}
            <div className="bg-base-100 rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-base-content mb-4">Amenities</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="flex items-center gap-2 text-base-content/80">
                  <WifiIcon className="w-5 h-5 text-accent" />
                  <span>Free WiFi</span>
                </div>
                <div className="flex items-center gap-2 text-base-content/80">
                  <TvIcon className="w-5 h-5 text-accent" />
                  <span>Smart TV</span>
                </div>
                <div className="flex items-center gap-2 text-base-content/80">
                  <CheckCircleIcon className="w-5 h-5 text-success" />
                  <span>Air Conditioning</span>
                </div>
                <div className="flex items-center gap-2 text-base-content/80">
                  <CheckCircleIcon className="w-5 h-5 text-success" />
                  <span>Room Service</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reservation Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-base-content mb-3">
            Reserve <span className="text-primary">{name}</span> Today
          </h2>
          <p className="text-lg text-base-content/60">Pay on arrival. No upfront payment required.</p>
        </div>

        <Suspense fallback={<ReservationSkeleton />}>
          <Reservations cabin={cabin}/>
        </Suspense>
      </div>
    </div>
  );
}