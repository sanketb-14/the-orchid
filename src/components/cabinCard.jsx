import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";
function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="card w-full bg-base-100 shadow-xl relative flex flex-row ">
    
        <div className="relative flex-1 w-full" >

          <Image
            src={image}
            fill
            alt={`Cabin ${name}`}
            className=" object-cover rounded-xl min-w-40 min-h-auto"
          />
        </div>
    
      <div className="card-body flex-grow w-1/2">
        <h2 className="card-title">
          {name}
          <span className="text-3xl h-5 w-5 text-secondary"> <UsersIcon /></span>
          <div className="badge badge-secondary">
           
            {maxCapacity}
          </div>
        </h2>
        <p>
          {" "}
          {discount > 0 ? (
            <>
              <span className="text-3xl font-[350]">
                ${regularPrice - discount}
              </span>
              <span className="line-through font-semibold text-secondary">
                ${regularPrice}
              </span>
            </>
          ) : (
            <span className="text-3xl font-[350]">${regularPrice}</span>
          )}
          <span className="text-secondary">/ night</span>
        </p>
        <div className="card-actions justify-end">
           <div className="text-secondary-content bg-secondary border-t border-t-accent text-right">
         <Link
            href={`/rooms/${id}`}
            className="border-l border-accent py-4 px-6 inline-block hover:bg-accent transition-all hover:text-accent-content"
          >
            Details & reservation &rarr;
          </Link>
        </div>
        </div>
      </div>
    </div>
  
  );
}

export default CabinCard;
