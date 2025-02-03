'use client'

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";


export default function Header() {
  const currentPath = usePathname();
  const [path, setPath] = useState(currentPath);

  // function handleNavLinkClick(clickedLinkHref: string) {
  //   setPath(clickedLinkHref);
  // }

  useEffect(() => {
    setPath(currentPath);
  }, [currentPath]);

  return (
    <nav className="bg-ts4nfdi-brand-color h-[70px]">
      <div className="mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset" aria-controls="mobile-menu" aria-expanded="false">
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
              <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center sm:items-stretch justify-start">
            <div className="flex shrink-0 items-center">
              <Image width={50} height={50} alt="logo" src={'/logo.png'} />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  href={'/'}
                  className={"navbar-links " + (path === "/home" || path === '/' ? "navbar-link-active" : "")}
                >Home
                </Link>
                <Link
                  href={'/widgets'}
                  className={"navbar-links " + (path.includes("/widgets") ? "navbar-link-active" : "")}
                >Widgets
                </Link>
                <Link
                  href={'/documentation'}
                  className={"navbar-links " + (path.includes("/documentation") ? "navbar-link-active" : "")}
                >Documentation
                </Link>
                <Link
                  href={'/about'}
                  className={"navbar-links " + (path.includes("/about") ? "navbar-link-active" : "")}
                >About
                </Link>
                <Link
                  href={'/contact'}
                  className={"navbar-links " + (path.includes("/contact") ? "navbar-link-active" : "")}
                >Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link href={'/'} className="navbar-links">Home</Link>
          <Link href={'/widgets'} className="navbar-links">Widgets</Link>
          <Link href={'/documentation'} className="navbar-links">Documentation</Link>
          <Link href={'/about'} className="navbar-links">About</Link>
          <Link href={'/help'} className="navbar-links">Contact</Link>
        </div>
      </div>
    </nav >

  );
}
