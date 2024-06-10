import { auth } from '@/app/_lib/auth';
import SelectCountry from '@/components/SelectCountry';
import UpdateProfileForm from '@/components/UpdateProfileForm'
import { getGuest } from '@/app/_lib/data-service';

export const metadata = {
    title :'Update profile'
}

const page = async() => {
  const session  = await auth() 
  const user = await getGuest(session.user.email)

 
   
  return (
    <div>
    <h2 className="font-semibold text-2xl text-primary mb-4">
      Update your guest profile
    </h2>

    <p className="text-lg mb-8 ">
      Providing the following information will make your check-in process
      faster and smoother. See you soon!
    </p>

    <UpdateProfileForm user={user}>
   <SelectCountry
          name="nationality"
          id="nationality"
          className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          defaultCountry={user.nationality}
        />

    </UpdateProfileForm>
  </div>
  )
}

export default page
