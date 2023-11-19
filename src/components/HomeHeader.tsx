import HomeIcon from "@mui/icons-material/Home"
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded"

function HomeHeader({ path, title }: any) {
  return (
    <header className="p-4 pt-20 lg:pt-0 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
      <div className="w-full mb-1">
        <div className="mb-2">
          <nav className="flex mb-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
              <li className="inline-flex items-center">
                <p className="inline-flex items-center text-slate-700 hover:text-primary-600">
                  <HomeIcon />
                  <span>Home</span>
                </p>
              </li>
              <li>
                <div className="flex items-center">
                  <KeyboardArrowRightRoundedIcon className="text-slate-600" />
                  <span
                    className="ml-1 capitalize text-gray-400 md:ml-2"
                    aria-current="page"
                  >
                    {path}
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
            {title}
          </h1>
        </div>
      </div>
    </header>
  )
}
export default HomeHeader
