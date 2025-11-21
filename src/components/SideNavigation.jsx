"use client"
import Link from 'next/link';
import {
    CalendarDaysIcon,
    HomeIcon,
    UserIcon,
  } from '@heroicons/react/24/solid';
import SignOutButton from './SignOutButton';
import { usePathname } from 'next/navigation';
  
const navLinks = [
  {
    name: 'Home',
    href: '/account',
    icon: <HomeIcon className='h-5 w-5' />,
  },
  {
    name: 'Reservations',
    href: '/account/reservations',
    icon: <CalendarDaysIcon className='h-5 w-5' />,
  },
  {
    name: 'Guest profile',
    href: '/account/profile',
    icon: <UserIcon className='h-5 w-5' />,
  },
];

function SideNavigation() {
  const pathname = usePathname()
  
  return (
    <nav className='bg-base-100 rounded-2xl shadow-lg p-4 h-fit sticky top-24'>
      <ul className='flex flex-col gap-2'>
        {navLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <li key={link.name}>
              <Link
                className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all ${
                  isActive 
                    ? 'bg-primary text-primary-content shadow-md' 
                    : 'text-base-content hover:bg-base-200'
                }`}
                href={link.href}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          )
        })}

        <li className='mt-6 pt-6 border-t border-base-300'>
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default SideNavigation;