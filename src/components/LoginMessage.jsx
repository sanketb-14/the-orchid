import Link from "next/link";
function LoginMessage() {
    return (
      <div className='grid card bg-base-300 '>
        <p className='text-center text-xl py-12 self-center'>
          Please{' '}
          <Link href='/login' className='link link-accent'>
            login
          </Link>{' '}
          to reserve this
          <br /> cabin right now
        </p>
      </div>
    );
  }
  
  export default LoginMessage;