import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/logo.png";
import { auth } from "@/app/_lib/auth";
import ThemeChanger from "@/components/ThemeChanger";
import { User } from "lucide-react";

const Navigation = async () => {
  const session = await auth();
  console.log(session);

  return (
    <nav className=" mb-8 top-0 left-0 right-0 z-50 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Image
                src={Logo}
                width={50}
                height={50}
                alt="the-orchid"
                className="rounded-full shadow-lg border-2 border-white/30 group-hover:border-white/60 transition-all duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <span className="hidden sm:inline text-2xl font-bold tracking-wider bg-gradient-to-l from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent drop-shadow-lg">
              The Orchid
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-2 sm:gap-6">
            <ul className="flex items-center gap-2 sm:gap-6">
              <li>
                <Link
                  href="/about"
                  className="text-sm sm:text-base text-primary/75 hover:text-secondary font-medium px-3 py-2 rounded-lg hover:bg-secondary/20 transition-all duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms"
                  className="text-sm sm:text-base text-primary/75 hover:text-secondary font-medium px-3 py-2 rounded-lg hover:bg-secondary/20 transition-all duration-300"
                >
                  Rooms
                </Link>
              </li>
              <li>
                {session?.user?.image ? (
                  <Link
                    href="/account"
                    className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 border border-primary/80 hover:border-white/40 transition-all duration-300 group"
                  >
                    <img
                      className="rounded-full w-7 h-7 sm:w-8 sm:h-8 border-2 border-white/50 group-hover:border-purple-400 transition-all"
                      src={session.user.image}
                      alt={session.user.name}
                      referrerPolicy="no-referrer"
                    />
                    <span className="hidden sm:inline text-sm text-info font-medium">
                      {session.user.name}
                    </span>
                  </Link>
                ) : (
                  <Link
                    href="/account"
                    className="flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                  >
                    <User className="w-4 h-4" />
                    <span className="hidden sm:inline">Account</span>
                  </Link>
                )}
              </li>
              <li className="ml-2">
                <div className="text-white/90 hover:text-accent ">
                  <ThemeChanger />
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
