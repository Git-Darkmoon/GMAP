"use client"

import { useGlobalContext } from "@/utils/context"
import { Maratonista } from "@/utils/myTypes"
import Swal from "sweetalert2"

const deleteUser = async (userId: number) => {
  await fetch(`/api/users/${userId}`, {
    method: "DELETE",
  })
}

const handleDelete = (userId: number) => {
  Swal.fire({
    title: "Estás segur@?",
    text: "Eliminar al maratonista hará que pierda acceso a la plataforma!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#ffb733",
    cancelButtonColor: "#c12f2f",
    confirmButtonText: "Si, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteUser(userId)
      Swal.fire({
        title: "Eliminado!",
        text: "El maratonista fue eliminado.",
        icon: "success",
      })
      window.location.reload()
    }
  })
}

function TableRowEl({
  first_name,
  last_name,
  student_id,
  email,
  team,
  course_check,
}: Maratonista) {
  const { openModal, setEditStudentId } = useGlobalContext()

  return (
    <tr className="bg-myOrange-50 border-b hover:bg-myOrange-100 transition-colors">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap text-center"
      >
        {first_name} {last_name}
      </th>
      <td className="px-6 py-4 text-center">{student_id}</td>
      <td className="px-6 py-4 text-center">{email}</td>
      <td className="px-6 py-4 text-center">{team}</td>
      <td className="px-6 py-4 text-center capitalize">{course_check}</td>
      <td className="flex items-center justify-center px-6 py-4 gap-3">
        <button
          className="font-medium px-5 py-2 bg-slate-800 text-slate-200 hover:bg-slate-700 rounded-sm transition-colors"
          onClick={() => {
            openModal()
            setEditStudentId(student_id)
          }}
        >
          Editar
        </button>
        <button
          onClick={() => handleDelete(student_id)}
          className="font-medium px-5 py-2 bg-slate-200 hover:bg-slate-300 text-slate-900 rounded-sm transition-colors"
        >
          Eliminar
        </button>
      </td>
    </tr>
  )
}
export default TableRowEl
