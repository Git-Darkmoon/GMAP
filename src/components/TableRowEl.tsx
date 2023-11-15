import { Maratonista } from "@/utils/userType"

function TableRowEl({
  first_name,
  last_name,
  student_id,
  email,
  team,
  course_check,
}: Maratonista) {
  return (
    <tr className="bg-white border-b hover:bg-myOrange-50 transition-colors">
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
      <td className="flex items-center justify-center px-6 py-4 ">
        <button className="font-medium text-blue-600 hover:underline">
          Editar
        </button>
        <button className="font-medium text-red-600 hover:underline ms-3">
          Eliminar
        </button>
      </td>
    </tr>
  )
}
export default TableRowEl
