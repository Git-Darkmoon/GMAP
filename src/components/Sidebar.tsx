"use client"

import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded"
import LogoutIcon from "@mui/icons-material/Logout"
import SidebarEl, { SidebarElType } from "./SidebarEl"
import { useGlobalContext } from "@/utils/context"

const sidebarElements: SidebarElType[] = [
  {
    id: 1,
    icon: <HomeRoundedIcon />,
    text: "Noticias",
    path: "/home/news",
  },
  {
    id: 2,
    icon: <Groups2RoundedIcon />,
    text: "Maratonistas",
    path: "/home/maratonistas",
  },
  {
    id: 3,
    icon: <LogoutIcon />,
    text: "Log out",
    path: "/",
  },
]

function Sidebar() {
  const { isSidebarOpen } = useGlobalContext()

  return (
    <aside
      id="sidebar"
      className={`fixed top-0 left-0 z-20 ${
        isSidebarOpen ? "visible" : "hidden"
      } lg:flex flex-col flex-shrink-0 w-64 h-full pt-16 font-normal duration-75 transition-width`}
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-slate-200">
        <div className="flex flex-col flex-1 pt-4 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-slate-200">
            <ul className="pb-2 space-y-2">
              {sidebarElements.map((el): any => {
                return <SidebarEl key={el.id} {...el} />
              })}
            </ul>
          </div>
        </div>
      </div>
    </aside>
  )
}
export default Sidebar
