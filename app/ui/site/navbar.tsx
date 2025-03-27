'use client'

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";


export default function NavBarOptions() {
  const currentPath = usePathname();
  const [path, setPath] = useState(currentPath);

  useEffect(() => {
    setPath(currentPath);
  }, [currentPath]);


  return (
    <>
      <div className="flex flex-1 items-center sm:items-stretch justify-start">
        <div className="flex shrink-0 items-center">
          <Link href={'/'}>
            <Image width={180} height={50} alt="logo" src={'/TS4NFDI-small-white.svg'} />
          </Link>
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
            >Lookup Service
            </Link>
            <Link
              href={'/incubators'}
              className={"navbar-links " + (path.includes("/incubators") ? "navbar-link-active" : "")}
            >Incubator Projects
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

    </>
  );
}


export function NavBarOptionsMobile() {
  return (
    <>
      <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <Link href={'/'} className="navbar-links">Home</Link>
          <Link href={'/widgets'} className="navbar-links">Lookup Service</Link>
          <Link href={'/incubators'} className="navbar-links">Incubator Projects</Link>
          <Link href={'/documentation'} className="navbar-links">Documentation</Link>
          <Link href={'/about'} className="navbar-links">About</Link>
          <Link href={'/help'} className="navbar-links">Contact</Link>
        </div>
      </div>
    </>
  );
}
