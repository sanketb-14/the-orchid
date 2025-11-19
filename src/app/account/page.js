import { auth } from "../_lib/auth"
import { redirect } from "next/navigation"
import Image from "next/image"

export const metadata = {
  title: "Account"
}

const Page = async () => {
  const session = await auth()
  
  // Add proper session validation
  if (!session?.user) {
    redirect('/login')
  }

  // Safe user data access
  const userName = session.user?.name || 'Guest'
  const firstName = userName.split(" ").at(0)
  
  return (
    <div className="card-body text-secondary flex flex-row w-full max-w-5xl justify-center rounded-lg text-2xl">
      Welcome <span className="text-3xl font-semibold text-primary tracking-wider">{firstName}</span>
    </div>
  )
}

export default Page