"use client"
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { Mountain, Trees, Heart, Users, Sparkles, ArrowRight, Star } from 'lucide-react'

const Page = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  const fadeInLeft = {
    initial: { opacity: 0, x: -60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
  }

  const fadeInRight = {
    initial: { opacity: 0, x: 60 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.7, ease: "easeOut" }
  }

  const scaleIn = {
    initial: { opacity: 0, scale: 0.8 },
    whileInView: { opacity: 1, scale: 1 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 0.6, ease: "easeOut" }
  }

  return (
    <div className="space-y-32 pb-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-12 bg-gradient-to-b from-primary/5 to-transparent rounded-3xl"
      >
        <motion.div 
          className="flex items-center justify-center gap-4 mb-6"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
        >
          <Mountain className="w-12 h-12 text-primary" />
          <h1 className="text-6xl font-bold text-primary">The Orchid</h1>
          <Trees className="w-12 h-12 text-secondary" />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-2xl text-base-content/70 font-light"
        >
          Your Paradise Away From Home Since 1962
        </motion.p>
      </motion.div>

      {/* First Section - Welcome */}
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <motion.div 
          className="lg:col-span-3 space-y-8"
          {...fadeInLeft}
        >
          <div className="space-y-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-primary to-secondary rounded-full"
            />
            <h2 className="text-5xl font-bold text-accent flex items-center gap-3">
              Welcome to The Orchid
              <Sparkles className="w-8 h-8 text-primary" />
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base-content/90"
            >
              Where nature's beauty and comfortable living blend seamlessly.
              Hidden away in the heart of the Paradise of Lonavala, this is your
              paradise away from home. But it's not just about the luxury Rooms.
              It's about the experience of reconnecting with nature and enjoying
              simple pleasures with family.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-base-content/90"
            >
              Our <span className="font-bold text-primary">8 luxury Rooms</span> provide a cozy base, but the real freedom and
              peace you'll find in the surrounding mountains. Wander through lush
              forests, breathe in the fresh air, and watch the stars twinkle above
              from the warmth of a campfire or your hot tub.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="text-base-content/90"
            >
              This is where memorable moments are made, surrounded by nature's
              splendor. It's a place to slow down, relax, and feel the joy of
              being together in a beautiful setting.
            </motion.p>
          </div>

          {/* Feature Pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap gap-3 pt-4"
          >
            {['Mountain Views', 'Hot Tubs', 'Campfires', 'Stargazing'].map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="badge badge-lg badge-primary gap-2 px-4 py-3"
              >
                <Star className="w-4 h-4" />
                {feature}
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div 
          className="lg:col-span-2 relative aspect-square"
          {...scaleIn}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/fire-family.jpg"
              className="object-cover"
              fill
              alt="Family sitting around a fire pit in front of cabin"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-6 left-6 right-6 bg-base-100/90 backdrop-blur-sm rounded-2xl p-4"
            >
              <p className="text-sm font-semibold text-primary flex items-center gap-2">
                <Heart className="w-4 h-4" />
                Creating Memories Together
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Second Section - Family Heritage */}
      <div className="grid lg:grid-cols-5 gap-12 items-center">
        <motion.div 
          className="lg:col-span-2 relative aspect-square order-2 lg:order-1"
          {...scaleIn}
        >
          <motion.div
            whileHover={{ scale: 1.05, rotate: -2 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/about-pic-2.jpg" 
              fill 
              alt="Family that manages The Orchid" 
              className="object-cover" 
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute top-6 left-6 right-6 bg-base-100/90 backdrop-blur-sm rounded-2xl p-4"
            >
              <p className="text-sm font-semibold text-secondary flex items-center gap-2">
                <Users className="w-4 h-4" />
                Family-Owned Since 1962
              </p>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div 
          className="lg:col-span-3 space-y-8 order-1 lg:order-2"
          {...fadeInRight}
        >
          <div className="space-y-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "4rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-secondary to-accent rounded-full"
            />
            <h2 className="text-5xl font-bold text-accent flex items-center gap-3">
              Managed by our family since 1962
              <Heart className="w-8 h-8 text-error animate-pulse" />
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed">
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-base-content/90"
            >
              Since 1962, The-Orchid has been a cherished family-run retreat.
              Started by our grandparents, this haven has been nurtured with love
              and care, passing down through our family as a testament to our
              dedication to creating a warm, welcoming environment.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-base-content/90"
            >
              Over the years, we've maintained the essence of The Orchid,
              blending the timeless beauty of the mountains with the personal
              touch only a family business can offer. Here, you're not just a
              guest; you're part of our extended family. So join us at The orchid soon, where tradition meets tranquility, and every visit is
              like coming home.
            </motion.p>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-3 gap-4 pt-6"
          >
            {[
              { number: '60+', label: 'Years of Service' },
              { number: '8', label: 'Luxury Rooms' },
              { number: '1000+', label: 'Happy Families' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl p-6 text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-sm text-base-content/70">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
          >
            <Link href="/rooms">
              <motion.button
                whileHover={{ scale: 1.05, x: 5 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-lg bg-gradient-to-r from-primary to-secondary text-primary-content border-0 gap-3 shadow-xl mt-4 px-8"
              >
                <span className="text-lg font-semibold">Explore our Rooms</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Decorative Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5 rounded-3xl p-12 text-center"
      >
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-primary">Ready for Your Mountain Escape?</h3>
          <p className="text-lg text-base-content/70 mb-6">
            Book your stay and experience the perfect blend of luxury and nature
          </p>
          <Link href="/rooms">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary btn-lg gap-2"
            >
              View Available Rooms
              <Sparkles className="w-5 h-5" />
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Page