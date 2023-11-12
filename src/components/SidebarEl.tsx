import { ReactElement } from "react"

export type SidebarElType = {
  id?: number
  icon: ReactElement
  text: string
}

export default function SidebarEl({ icon, text }: SidebarElType) {
  return (
    <li>
      <button
        type="button"
        className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-700"
        aria-controls="dropdown-pages"
        data-collapse-toggle="dropdown-pages"
      >
        {icon}
        <span
          className="flex-1 ml-3 text-left whitespace-nowrap"
          sidebar-toggle-item
        >
          {text}
        </span>
      </button>
    </li>
  )
}
