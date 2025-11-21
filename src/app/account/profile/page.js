import { auth } from '@/app/_lib/auth';
import SelectCountry from '@/components/SelectCountry';
import UpdateProfileForm from '@/components/UpdateProfileForm'
import { getGuest } from '@/app/_lib/data-service';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export const metadata = {
    title: 'Update profile'
}

const page = async() => {
  const session = await auth() 
  const user = await getGuest(session.user.email)

  return (
    <div className="max-w-3xl">
      {/* Header */}
      <div className="flex items-center gap-4 mb-8">
        <div className="bg-primary/10 rounded-full p-3">
          <UserCircleIcon className="w-8 h-8 text-primary" />
        </div>
        <div>
          <h2 className="font-bold text-3xl text-base-content">
            Guest Profile
          </h2>
          <p className="text-base-content/60 mt-1">
            Update your information for a smoother check-in experience
          </p>
        </div>
      </div>

      <UpdateProfileForm user={user}>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-base-200 text-base-content w-full shadow-sm rounded-lg border border-base-300 focus:border-primary focus:outline-none transition-colors"
          defaultCountry={user.nationality}
        />
      </UpdateProfileForm>
    </div>
  )
}

export default page