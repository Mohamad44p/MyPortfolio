'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-[100]">
      <div className="navbar bg-[#282C33]">
        <div className="navbar-start gap-2 mx-24">
          {/* mobile menu */}
          <div className="lg:hidden flex dropdown bg-[#282C33] mr-11 fixed left-1 top-2">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                color="#FFF"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow-lg bg-[#282C33] rounded-box w-52"
            >
       {(pathname === "/" || pathname === "/projects" || pathname === "/about" || pathname === "/contacts") && (
              <>
                <li>
                  <Link href="/" className={`gap-0 italic text-[16px] ${pathname === "/" ? 'text-[#FFF]' : 'text-[#cac9c9] '}`}>
                    <span className="text-[#C778DD] mr-0">#</span> home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className={`gap-0 italic text-[16px] ${pathname === "/projects" ? 'text-[#FFF]' : 'text-[#cac9c9] '}`}>
                    <span className="text-[#C778DD] mr-0">#</span> works
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={`gap-0 italic text-[16px] ${pathname === "/about" ? 'text-[#FFF]' : 'text-[#cac9c9] '}`}>
                    <span className="text-[#C778DD] mr-0">#</span> about-me
                  </Link>
                </li>
                <li>
                  <Link href="/contacts" className={`gap-0 italic text-[16px] ${pathname === "/contacts" ? 'text-[#FFF]' : 'text-[#cac9c9] '}`}>
                    <span className="text-[#C778DD] mr-0">#</span> contacts
                  </Link>
                </li>
              </>
            )}
            </ul>
          </div>
          <Link href="/" className="flex gap-2">
          <Image
            src={"/logo.svg"}
            alt="logo"
            width={16}
            height={16}
            quality={100}
          />
          <h1 className="text-[16px] font-bold text-[#FFF] ">Mohamad</h1>
          </Link>
        </div>
        {/* desktop menu */}

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {(pathname === "/" || pathname === "/projects" || pathname === "/about" || pathname === "/contacts") && (
              <>
                <li>
                  <Link href="/" className={`gap-0 italic text-[16px] ${pathname === "/" ? 'text-[#FFF]' : 'text-[#cac9c9] '}`}>
                    <span className="text-[#C778DD] mr-0">#</span> home
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className={`gap-0 italic text-[16px] ${pathname === "/projects" ? 'text-[#FFF]' : 'text-[#cac9c9] '}`}>
                    <span className="text-[#C778DD] mr-0">#</span> works
                  </Link>
                </li>
                <li>
                  <Link href="/about" className={`gap-0 italic text-[16px] ${pathname === "/about" ? 'text-[#FFF]' : 'text-[#cac9c9] '}`}>
                    <span className="text-[#C778DD] mr-0">#</span> about-me
                  </Link>
                </li>
                <li>
                  <Link href="/contacts" className={`gap-0 italic text-[16px] ${pathname === "/contacts" ? 'text-[#FFF]' : 'text-[#cac9c9] '}`}>
                    <span className="text-[#C778DD] mr-0">#</span> contacts
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
