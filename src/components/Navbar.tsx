"use client"

import Image from "next/image"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import GitHubIcon from "@mui/icons-material/GitHub"
import Link from "next/link"
import { useGlobalContext } from "@/utils/context"

const Navbar = () => {
  const { toggleSidebar } = useGlobalContext()

  return (
    <nav className="fixed flex justify-between px-5 z-30 w-full max-h-16 bg-white border-b border-gray-200">
      <button
        id="toggleSidebarMobile"
        aria-expanded="true"
        aria-controls="sidebar"
        onClick={toggleSidebar}
        className="cursor-pointer lg:hidden text-slate-600  hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-4"
      >
        <MenuRoundedIcon />
      </button>
      <Link
        href="/home/news"
        className="flex items-center justify-center gap-2"
      >
        <Image
          src={"/GMAP_logo_withouthBg.webp"}
          width={150}
          height={150}
          className="h-16 w-10 py-2"
          alt="GMAP Logo"
          priority
        />
        <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap text-myOrange-500">
          GMAP
        </span>
      </Link>

      <div className="flex items-center">
        <a
          href={"https://github.com/Git-Darkmoon/GMAP"}
          className="flex justify-center items-center gap-2 text-slate-600  hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5"
        >
          <GitHubIcon />
          <p className="hidden md:block">Github Repository</p>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
