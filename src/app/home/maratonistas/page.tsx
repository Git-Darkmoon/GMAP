"use client"

import HomeIcon from "@mui/icons-material/Home"
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded"
import TableRowEl from "@/components/TableRowEl"
import { Maratonista } from "@/utils/myTypes"
import TableHeadEl from "@/components/TableHeadEl"
import { useEffect, useState } from "react"
import EditModal from "@/components/EditModal"
import { useGlobalContext } from "@/utils/context"
import HomeHeader from "@/components/HomeHeader"

function MaratonistasPage() {
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

      <HomeHeader path={"Maratonistas"} title={"Maratonistas inscritos"} />

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
export default MaratonistasPage
