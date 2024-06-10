import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { signOutAction } from '@/app/_lib/action';

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className='btn  w-full tracking-widest text-red-600 bg-base-300'>
      <ArrowRightOnRectangleIcon className='h-5 w-5 text-primary-600' />
      <span>Sign out</span>
    </button>
    </form>
  );
}

export default SignOutButton;