import Image from "next/image"
import React from "react"

const Navbar = () => {
  return (
    <nav className="fixed z-30 w-full bg-white border-b border-gray-200 dark:bg-slate-900 dark:border-gray-700">
      <div className="px-3 py-3 lg:px-5 lg:pl-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center justify-start">
            <button
              id="toggleSidebarMobile"
              aria-expanded="true"
              aria-controls="sidebar"
              className="p-2 text-gray-600 rounded cursor-pointer lg:hidden hover:text-gray-900 hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 focus:ring-2 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
            >
              {/* ... SVG icons for mobile toggle */}
            </button>
            <a href="/" className="flex ml-2 md:mr-24">
              <Image
                src="/images/logo.svg"
                className="h-8 mr-3"
                alt="Logo"
                width={32}
                height={32}
              />
              <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                GMAP
              </span>
            </a>
            {/* ... Search form */}
          </div>
          <div className="flex items-center">
            {/* ... GitHub button */}
            {/* ... Search mobile button */}
            {/* ... Notifications button */}
            {/* ... Notifications dropdown */}
            {/* ... Apps button */}
            {/* ... Apps dropdown */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
