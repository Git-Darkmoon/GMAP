import Link from "next/link"
import { ReactElement } from "react"

export type SidebarElType = {
  id?: number
  icon: ReactElement
  text: string
  path: string
}

export default function SidebarEl({ icon, text, path }: SidebarElType) {
  return (
    <li>
      <Link
        href={path}
        className="flex items-center w-full p-2 text-base text-slate-600 hover:bg-myOrange-100 hover:text-slate-900 transition duration-75 rounded-lg group "
      >
        {icon}
        <span className="flex-1 ml-3 text-left whitespace-nowrap">{text}</span>
      </Link>
    </li>
  )
}
