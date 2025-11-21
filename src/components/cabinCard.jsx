import { UsersIcon, SparklesIcon, TagIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group">
      <figure className="relative h-64 overflow-hidden">
        <Image
          src={image}
          fill
          alt={`Cabin ${name}`}
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-base-300/80 via-transparent to-transparent"></div>
        
        {/* Discount Badge */}
        {discount > 0 && (
          <div className="absolute top-4 right-4 badge badge-secondary badge-lg gap-1 shadow-lg">
            <TagIcon className="w-4 h-4" />
            Save ${discount}
          </div>
        )}
        
        {/* Capacity Badge */}
        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-base-100/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg">
          <UsersIcon className="w-5 h-5 text-primary" />
          <span className="text-sm font-semibold text-base-content">Up to {maxCapacity} guests</span>
        </div>
      </figure>

      <div className="card-body">
        {/* Room Name */}
        <h2 className="card-title text-2xl font-bold text-base-content flex items-center gap-2">
          <SparklesIcon className="w-6 h-6 text-accent" />
          {name}
        </h2>

        {/* Pricing */}
        <div className="flex items-baseline gap-2 my-4">
          {discount > 0 ? (
            <>
              <span className="text-4xl font-bold text-primary">
                ${regularPrice - discount}
              </span>
              <span className="text-xl line-through text-error opacity-60">
                ${regularPrice}
              </span>
            </>
          ) : (
            <span className="text-4xl font-bold text-primary">${regularPrice}</span>
          )}
          <span className="text-base-content/60 text-sm">per night</span>
        </div>

        {/* Features List */}
        <div className="flex flex-wrap gap-2 mb-4">
          <div className="badge badge-outline badge-primary">Luxury Room</div>
          <div className="badge badge-outline badge-accent">Free WiFi</div>
          <div className="badge badge-outline badge-info">Ocean View</div>
        </div>

        {/* CTA Button */}
        <div className="card-actions justify-end mt-4">
          <Link href={`/rooms/${id}`} className="w-full">
            <button className="btn btn-secondary btn-block group/btn">
              <span>View Details & Book Now</span>
              <svg className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;