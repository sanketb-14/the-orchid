import { auth } from "../_lib/auth"
import { redirect } from "next/navigation"
import { SparklesIcon, CalendarIcon, UserCircleIcon, ClockIcon } from "@heroicons/react/24/solid"

export const metadata = {
  title: "Account"
}

const Page = async () => {
  const session = await auth()
  
  if (!session?.user) {
    redirect('/login')
  }

  const userName = session.user?.name || 'Guest'
  const firstName = userName.split(" ").at(0)
  
  return (
    <div className="space-y-8">
      {/* Welcome Header */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-8 text-white shadow-xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
            <SparklesIcon className="w-8 h-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">
              Welcome back, {firstName}!
            </h1>
            <p className="text-white/80 text-lg mt-1">Manage your stays and preferences</p>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-base-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-primary/10 rounded-full p-3">
              <CalendarIcon className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm text-base-content/60">Total Bookings</p>
              <p className="text-2xl font-bold text-base-content">0</p>
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-success/10 rounded-full p-3">
              <ClockIcon className="w-6 h-6 text-success" />
            </div>
            <div>
              <p className="text-sm text-base-content/60">Upcoming Stays</p>
              <p className="text-2xl font-bold text-base-content">0</p>
            </div>
          </div>
        </div>

        <div className="bg-base-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center gap-4">
            <div className="bg-accent/10 rounded-full p-3">
              <UserCircleIcon className="w-6 h-6 text-accent" />
            </div>
            <div>
              <p className="text-sm text-base-content/60">Member Since</p>
              <p className="text-2xl font-bold text-base-content">2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-base-100 rounded-2xl p-8 shadow-lg">
        <h2 className="text-2xl font-bold text-base-content mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <a href="/rooms" className="btn btn-primary btn-lg justify-start gap-3">
            <CalendarIcon className="w-5 h-5" />
            Book a New Stay
          </a>
          <a href="/account/reservations" className="btn btn-outline btn-lg justify-start gap-3">
            <ClockIcon className="w-5 h-5" />
            View Reservations
          </a>
        </div>
      </div>
    </div>
  )
}

export default Page