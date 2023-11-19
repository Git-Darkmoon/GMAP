import HomeIcon from "@mui/icons-material/Home"
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded"

function NewsPage() {
  return (
    <main className="lg:pt-16 lg:pl-64">
      {/* Header code */}

      <header className="p-4 pt-20 lg:pt-0 bg-white block sm:flex items-center justify-between border-b border-gray-200 lg:mt-1.5">
        <div className="w-full mb-1">
          <div className="mb-4">
            <nav className="flex mb-5" aria-label="Breadcrumb">
              <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
                <li className="inline-flex items-center">
                  <a
                    href="#"
                    className="inline-flex items-center text-slate-700 hover:text-primary-600"
                  >
                    <HomeIcon />
                    Home
                  </a>
                </li>
                <li>
                  <div className="flex items-center">
                    <KeyboardArrowRightRoundedIcon className="text-slate-600" />
                    <span
                      className="ml-1 text-gray-400 md:ml-2"
                      aria-current="page"
                    >
                      Noticias
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Noticias de las maratones de programacion
            </h1>
          </div>
        </div>
      </header>
    </main>
  )
}
export default NewsPage
