import HomeRoundedIcon from "@mui/icons-material/HomeRounded"
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded"
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded"
import GitHubIcon from "@mui/icons-material/GitHub"
import SidebarEl, { SidebarElType } from "./SidebarEl"

const sidebarElements: SidebarElType[] = [
  {
    id: 1,
    icon: <HomeRoundedIcon />,
    text: "Home",
  },
  {
    id: 2,
    icon: <Groups2RoundedIcon />,
    text: "Maratonistas",
  },
  {
    id: 3,
    icon: <ManageAccountsRoundedIcon />,
    text: "Perfil",
  },
]

function Sidebar() {
  return (
    <aside
      id="sidebar"
      className="fixed top-0 left-0 z-20 hidden lg:flex flex-col flex-shrink-0 w-64 h-full pt-16 font-normal duration-75 transition-width"
      aria-label="Sidebar"
    >
      <div className="relative flex flex-col flex-1 min-h-0 pt-0 bg-white border-r border-gray-200 dark:bg-slate-900 dark:border-gray-700">
        <div className="flex flex-col flex-1 pt-4 pb-4 overflow-y-auto">
          <div className="flex-1 px-3 space-y-1 bg-white divide-y divide-gray-200 dark:bg-slate-900 dark:divide-gray-700">
            <ul className="pb-2 space-y-2">
              {sidebarElements.map((el): any => {
                return <SidebarEl key={el.id} {...el} />
              })}
            </ul>
            <div className="pt-2 space-y-2">
              <a
                href="https://github.com/Git-Darkmoon/GMAP.git"
                target="_blank"
                className="flex items-center p-2 text-base text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group dark:text-gray-200 dark:hover:bg-gray-700"
              >
                <GitHubIcon />
                <span className="ml-3" sidebar-toggle-item>
                  GitHub Repository
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  )
}
export default Sidebar
