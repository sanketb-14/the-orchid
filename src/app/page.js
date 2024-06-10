import Image from "next/image";
import bg_img from '../../public/bg-img.jpg'
import Link from "next/link";
export default function Home() {
  return (
  <main className="opacity-90  ">
    <Image  src={bg_img} fill  className="object-cover object-top" alt="the-orchid hotel image" placeholder="blur"/>
    <div className="w-full flex justify-center flex-col items-center">
    <h1 className="relative z-10 text-3xl sm:text-7xl font-bold text-center text-white tracking-wide">Welcome to the Orchid-Paradise. </h1>
    <Link href="/rooms" className="w-full flex items-center justify-center">
    <button className="btn relative w-full max-w-80 mt-20 font-bold text-white bg-secondary">Explore Orchid Rooms</button>
    </Link>
    </div>
  </main>
  );
}
