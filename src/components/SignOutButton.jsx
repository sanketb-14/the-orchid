import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';
import { signOutAction } from '@/app/_lib/action';
import { motion } from 'framer-motion';
import { LogOut } from 'lucide-react';

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className='btn btn-error w-full gap-3 text-lg'
      >
        <LogOut className='h-5 w-5' />
        <span>Sign out</span>
      </motion.button>
    </form>
  );
}

export default SignOutButton;