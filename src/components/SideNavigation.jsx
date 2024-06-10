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
      icon: <HomeIcon className='h-5 w-5 text-primary-600' />,
    },
    {
      name: 'Reservations',
      href: '/account/reservations',
      icon: <CalendarDaysIcon className='h-5 w-5 text-primary-600' />,
    },
    {
      name: 'Guest profile',
      href: '/account/profile',
      icon: <UserIcon className='h-5 w-5 text-primary-600' />,
    },
  ];
  
  function SideNavigation() {
    const pathname = usePathname()
    return (
      <nav className='border-r border-secondary p-2'>
        <ul className='flex flex-col gap-6 h-full text-lg'>
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                className={`btn   hover: hover:text-accent-focus transition-colors flex items-center gap-4 font-semibold text-accent ${pathname === link.href ? "btn-accent btn text-accent-content":""}`}
                href={link.href}
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
  
          <li className='mt-auto'>
            <SignOutButton />
          </li>
        </ul>
      </nav>
    );
  }
  
  export default SideNavigation;