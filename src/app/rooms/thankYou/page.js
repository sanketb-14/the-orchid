"use client";

import Link from "next/link";
import { CheckCircleIcon, SparklesIcon, CalendarIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="max-w-2xl w-full">
        {/* Success Animation */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
          className="flex justify-center mb-8"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-success/20 rounded-full blur-2xl animate-pulse"></div>
            <CheckCircleIcon className="w-24 h-24 text-success relative z-10" />
          </div>
        </motion.div>

        {/* Main Content Card */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-base-100 rounded-3xl shadow-2xl p-8 sm:p-12 text-center space-y-6"
        >
          {/* Success Badge */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-success/10 rounded-full"
          >
            <SparklesIcon className="w-5 h-5 text-success" />
            <span className="text-sm font-semibold text-success">Booking Confirmed</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-4xl sm:text-5xl font-bold text-base-content"
          >
            Thank You for Your{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Reservation!
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="text-lg text-base-content/70 max-w-md mx-auto"
          >
            Your booking has been successfully confirmed. We've sent a confirmation email with all the details.
          </motion.p>

          {/* Info Cards */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="grid sm:grid-cols-2 gap-4 mt-8"
          >
            <div className="bg-base-200 rounded-2xl p-6 text-left">
              <CalendarIcon className="w-8 h-8 text-primary mb-3" />
              <h3 className="font-semibold text-base-content mb-1">What's Next?</h3>
              <p className="text-sm text-base-content/60">
                Check your email for booking details and arrival information
              </p>
            </div>
            <div className="bg-base-200 rounded-2xl p-6 text-left">
              <CheckCircleIcon className="w-8 h-8 text-success mb-3" />
              <h3 className="font-semibold text-base-content mb-1">Payment</h3>
              <p className="text-sm text-base-content/60">
                Pay on arrival. No upfront payment required
              </p>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="pt-6"
          >
            <Link href="/account/reservations">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary btn-lg rounded-full px-8 gap-3 shadow-lg group"
              >
                <CalendarIcon className="w-5 h-5" />
                Manage Your Reservations
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>
          </motion.div>

          {/* Secondary Link */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Link
              href="/rooms"
              className="text-accent hover:text-accent/80 transition-colors inline-flex items-center gap-2 text-sm"
            >
              Browse more rooms
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Floating Decorative Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex justify-center gap-12 mt-12"
        >
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, 0, -5, 0],
              }}
              transition={{
                duration: 3,
                delay: i * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="w-2 h-2 bg-primary/40 rounded-full"
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
}