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
        className="flex items-center w-full p-2 text-base text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition duration-75 rounded-lg group "
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
