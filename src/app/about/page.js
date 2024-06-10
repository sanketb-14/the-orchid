// import firePic from '../../../public/fire-family.jpg'
// import aboutPic from '../../../public/about-pic-2.jpg'
import Image from 'next/image'
export const metadata = {
    title:"About"
}
import Link from 'next/link'
const Page = async () => {

    return (
        <div className="grid grid-cols-5 gap-x-12 gap-y-32 text-lg items-center">
        <div className="col-span-3">
          <h1 className="text-4xl mb-10 text-accent font-medium">
            Welcome to The-Orchid
          </h1>
  
          <div className="space-y-8">
            <p>
              Where nature's beauty and comfortable living blend seamlessly.
              Hidden away in the heart of the Paradise of Lonavala, this is your
              paradise away from home. But it's not just about the luxury Rooms.
              It's about the experience of reconnecting with nature and enjoying
              simple pleasures with family.
            </p>
            <p>
              Our 8 luxury Rooms provide a cozy base, but the real freedom and
              peace you'll find in the surrounding mountains. Wander through lush
              forests, breathe in the fresh air, and watch the stars twinkle above
              from the warmth of a campfire or your hot tub.
            </p>
            <p>
              This is where memorable moments are made, surrounded by nature's
              splendor. It's a place to slow down, relax, and feel the joy of
              being together in a beautiful setting.
            </p>
          </div>
        </div>
  
        <div className="col-span-2 relative aspect-square">
          <Image
            src="/fire-family.jpg"
            className='object-cover'
            fill
            alt="Family sitting around a fire pit in front of cabin"
          />
        </div>
  
        <div className="col-span-2 aspect-square relative">
          <Image src="/about-pic-2.jpg" fill alt="Family that manages The Wild Oasis" className='object-cover' />
        </div>
  
        <div className="col-span-3">
          <h1 className="text-4xl mb-10 text-accent font-medium">
            Managed by our family since 1962
          </h1>
  
          <div className="space-y-8">
            <p>
              Since 1962, The-Orchid has been a cherished family-run retreat.
              Started by our grandparents, this haven has been nurtured with love
              and care, passing down through our family as a testament to our
              dedication to creating a warm, welcoming environment.
            </p>
            <p>
              Over the years, we've maintained the essence of The Orchid,
              blending the timeless beauty of the mountains with the personal
              touch only a family business can offer. Here, you're not just a
              guest; you're part of our extended family. So join us at The orchid soon, where tradition meets tranquility, and every visit is
              like coming home.
            </p>
  
            <div>
              <Link
                href="/rooms"
                className="inline-block mt-4 bg-accent px-8 py-5 text-secondary-content text-lg font-semibold hover:bg-accent transition-all"
              >
                Explore our Rooms
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Page
  