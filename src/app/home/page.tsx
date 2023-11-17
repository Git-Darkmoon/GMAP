"use client"

import HomeIcon from "@mui/icons-material/Home"
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded"
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined"
import TableRowEl from "@/components/TableRowEl"
import { Maratonista } from "@/utils/userType"
import TableHeadEl from "@/components/TableHeadEl"
import { useEffect, useState } from "react"
import EditModal from "@/components/EditModal"
import { useGlobalContext } from "@/utils/context"

function HomePage() {
  const { isModalOpen } = useGlobalContext()

  const [maratonistas, setMaratonistas] = useState<Maratonista[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/users")
        if (!response.ok) {
          throw new Error("Network response was not ok")
        }

        const users = await response.json()

        setMaratonistas(users.data)
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }

    fetchData()
  }, []) // The empty dependency array ensures that this effect runs once after the initial render

  const thTitles: string[] = [
    "Nombre Completo",
    "Codigo",
    "Email",
    "Equipo",
    "Acceso a",
    "Acciones",
  ]

  return (
    <main className="lg:pt-16 lg:pl-64">
      {isModalOpen && <EditModal />}

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
                      Maratonistas
                    </span>
                  </div>
                </li>
              </ol>
            </nav>
            <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Todos los maratonistas
            </h1>
          </div>
          {/* <div className="items-center justify-between block sm:flex md:divide-x md:divide-gray-100">
            <div className="flex items-center mb-4 sm:mb-0 gap-12 sm:gap-0">
              <form className="sm:pr-3">
                <label htmlFor="products-search" className="sr-only">
                  Search
                </label>
                <div className="relative w-48 mt-1 sm:w-64 xl:w-96">
                  <input
                    type="text"
                    name="email"
                    id="products-search"
                    className="bg-gray-50 border w-full border-gray-300 sm:text-sm rounded-lg block p-2.5 text-slate-600 focus:border-myOrange-400 focus:outline-none focus:ring-1 focus:ring-myOrange-500 focus:shadow-md"
                    placeholder="Busca maratonistas"
                    autoComplete="off"
                  />
                </div>
              </form>
              <div className="flex items-center w-full sm:justify-end">
                <div className="flex pl-2 space-x-1">
                  <InfoOutlinedIcon
                    fontSize="large"
                    className="inline-flex justify-center p-1 text-gray-500 rounded cursor-pointer hover:text-gray-900 hover:bg-gray-100"
                  />
                </div>
              </div>
            </div>
            <button
              id="createProductButton"
              className="text-slate-700 bg-myOrange-300 hover:bg-myOrange-400 hover:shadow-sm hover:text-slate-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 transition-all"
              type="button"
            >
              Añadir Maratonista
            </button>
          </div> */}
        </div>
      </header>

      {/* Table Code */}

      <section className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              {/* 6 th */}
              {thTitles.map((title, index) => {
                return <TableHeadEl key={index} title={title} />
              })}
            </tr>
          </thead>

          <tbody>
            {maratonistas?.map((maratonista: Maratonista) => {
              return (
                <TableRowEl key={maratonista.student_id} {...maratonista} />
              )
            })}
          </tbody>
        </table>
      </section>
    </main>
  )
}
export default HomePage
