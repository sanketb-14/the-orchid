"use client"

import React from 'react'
import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Hotel, Star } from "lucide-react";
import Link from "next/link";

const HomeContent = () => {
  return (
 <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-6 sm:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span className="text-sm sm:text-base text-white font-medium">5-Star Luxury Experience</span>
          </div>
        </motion.div>

        {/* Main Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center max-w-5xl mb-6 sm:mb-8"
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 sm:mb-6 leading-tight">
            Welcome to the
            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
              Orchid Paradise
            </span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="text-lg sm:text-xl lg:text-2xl text-white/90 max-w-2xl mx-auto font-light"
          >
            Where luxury meets serenity. Experience unparalleled comfort in our exquisite accommodations.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-xl px-4"
        >
          <Link href="/rooms" className="flex-1">
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(139, 92, 246, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 sm:py-5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-base sm:text-lg shadow-2xl backdrop-blur-sm flex items-center justify-center gap-3 group transition-all no-wrap"
            >
              <Hotel className="w-5 sm:w-8 h-5 sm:h-8" />
            <span className="block mt-2 bg-gradient-to-r from-white  to-gray-200 whitespace-nowrap bg-clip-text text-transparent">  Explore Our Rooms</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
          
          <Link href="/about" className="flex-1">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 sm:py-5 bg-white/10 backdrop-blur-md text-white rounded-full font-semibold text-base sm:text-lg border-2 border-white/30 hover:bg-white/20 transition-all flex items-center justify-center gap-3"
            >
              <Sparkles className="w-5 h-5" />
              Discover More
            </motion.button>
          </Link>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-16 sm:mt-20 grid grid-cols-3 gap-4 sm:gap-8 w-full max-w-3xl px-4"
        >
          {[
            { value: "150+", label: "Luxury Rooms" },
            { value: "4.9", label: "Guest Rating" },
            { value: "24/7", label: "Concierge" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="text-center p-4 sm:p-6 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20"
            >
              <div className="text-2xl sm:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.value}</div>
              <div className="text-xs sm:text-sm text-white/80">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-white/40 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-white rounded-full"
            />
          </div>
        </motion.div>
      </div>
  )
}

export default HomeContent