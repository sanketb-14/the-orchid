import Image from "next/image";
import bg_img from "../../public/bg-img.jpg";
import Link from "next/link";
import HomeContent from "@/components/HomeContent";
export default function Home() {
  return (
    <main className="opacity-90 a ">
      <div className="absolute inset-0 z-0">
        <Image 
          src={bg_img} 
          fill  
          className="object-cover object-center brightness-[0.7]" 
          alt="the-orchid hotel image" 
          placeholder="blur"
          priority
        />
        {/* Gradient Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </div>

      <HomeContent/>
     
    </main>
  );
}
