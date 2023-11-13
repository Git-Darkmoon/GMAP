import Image from "next/image"
import MenuRoundedIcon from "@mui/icons-material/MenuRounded"
import NightsStayRoundedIcon from "@mui/icons-material/NightsStayRounded"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav className="fixed flex justify-between px-5 z-30 w-full max-h-16 bg-white border-b border-gray-200">
      <button
        id="toggleSidebarMobile"
        aria-expanded="true"
        aria-controls="sidebar"
        className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-slate-100 focus:bg-slate-100 dark:focus:bg-slate-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <MenuRoundedIcon />
      </button>
      <Link href="/home" className="flex items-center justify-center gap-2">
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
        <button
          id="theme-toggle"
          data-tooltip-target="tooltip-toggle"
          type="button"
          className="text-slate-600  hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 rounded-lg text-sm p-2.5"
        >
          <NightsStayRoundedIcon />
        </button>
        <div
          id="tooltip-toggle"
          role="tooltip"
          className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip"
        >
          Toggle dark mode
          <div className="tooltip-arrow" data-popper-arrow></div>
        </div>
      </div>
    </nav>
  )
}

//https://flowbite.com/docs/images/people/profile-picture-5.jpg

export default Navbar
