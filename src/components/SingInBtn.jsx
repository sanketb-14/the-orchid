import { signInAction } from "@/app/_lib/action"

function SignInBtn(){
    return (
       <form action={signInAction}>
         <button className=' w-full text-sm sm:text-lg  btn  font-medium'>
        <img
          src='https://authjs.dev/img/providers/google.svg'
          alt='Google logo'
          height='24'
          width='24'
        />
        <span>Continue with Google</span>
      </button>
       </form>
    )
}
export default SignInBtn