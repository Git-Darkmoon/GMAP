"use client"
import { useGlobalContext } from "@/utils/context"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded"
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded"
import { FormEvent, useState } from "react"
import Swal from "sweetalert2"

const updateUser = async (userId: number, data: any) => {
  await fetch(`/api/users/${userId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
}

const handleEditSubmit = async (
  e: FormEvent<HTMLFormElement>,
  userId: number,
  closeModal: any
) => {
  e.preventDefault()
  const formData = new FormData(e.currentTarget)
  const updatedData = Object.fromEntries(formData)

  updateUser(userId, updatedData)

  Swal.fire({
    title: "Datos editados",
    icon: "success",
    confirmButtonText: "Ok",
  }).then((result) => {
    if (result.isConfirmed) {
      closeModal()
      window.location.reload()
    }
  })
}

function EditModal() {
  const { editStudentId, closeModal } = useGlobalContext()
  const [showPw, setShowPw] = useState<boolean>(false)
  const [PW, setPW] = useState<string>("")
  const [confirmPW, setConfirmPW] = useState<string>(" ")

  return (
    <div className="fixed left-0 right-0 w-screen h-screen z-20 flex items-center justify-center bg-slate-900/50 backdrop-blur-sm">
      <article className="relative bg-white rounded-lg shadow">
        <div className="flex items-start justify-between p-5 border-b rounded-t">
          <h3 className="text-xl font-semibold">Edit user</h3>
          <button
            type="button"
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
            onClick={closeModal}
          >
            <CloseRoundedIcon />
          </button>
        </div>
        <div className="p-6 space-y-6">
          <form
            onSubmit={(e) => handleEditSubmit(e, editStudentId, closeModal)}
          >
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Primer Nombre
                </label>
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  className="shadow-sm focus:bg-myOrange-100 outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 transition-colors"
                  placeholder="Bonnie"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last_name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Primer Apellido
                </label>
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  className="shadow-sm focus:bg-myOrange-100 outline-none bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 transition-colors"
                  placeholder="Clyde"
                  autoComplete="off"
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Nueva Contraseña{" "}
                  {showPw ? (
                    <VisibilityRoundedIcon
                      fontSize="small"
                      className="text-slate-500 cursor-pointer"
                      onClick={() => setShowPw(!showPw)}
                    />
                  ) : (
                    <VisibilityOffRoundedIcon
                      fontSize="small"
                      className="text-slate-500 cursor-pointer"
                      onClick={() => setShowPw(!showPw)}
                    />
                  )}
                </label>
                <input
                  type={showPw ? "text" : "password"}
                  id="new_pw"
                  className={`shadow-sm bg-gray-50 border ${
                    PW !== confirmPW
                      ? "border-4 border-red-500"
                      : "border-4 border-green-300"
                  }text-gray-900 focus:bg-myOrange-100 outline-none sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 transition-colors`}
                  placeholder="********"
                  onChange={(e) => setPW(e.target.value)}
                  pattern="^(?=.*[A-Z])(?=.*\d).{8,}$"
                  title="La contraseña debe incluir una mayuscula, un numero y debe ser de 8 caracteres minimo. "
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Confirma la contraseña{" "}
                  {showPw ? (
                    <VisibilityRoundedIcon
                      fontSize="small"
                      className="text-slate-500 cursor-pointer"
                      onClick={() => setShowPw(!showPw)}
                    />
                  ) : (
                    <VisibilityOffRoundedIcon
                      fontSize="small"
                      className="text-slate-500 cursor-pointer"
                      onClick={() => setShowPw(!showPw)}
                    />
                  )}
                </label>
                <input
                  type={showPw ? "text" : "password"}
                  name="password"
                  id="password"
                  className={`shadow-sm bg-gray-50 ${
                    PW !== confirmPW
                      ? "border-4 border-red-500"
                      : "border-4 border-green-300"
                  } text-gray-900 sm:text-sm rounded-lg outline-none focus:shadow-md focus:bg-myOrange-100 block w-full p-2.5 transition-all`}
                  placeholder={`
                    ${PW !== confirmPW ? "no coinciden" : ""}
                  `}
                  onChange={(e) => setConfirmPW(e.target.value)}
                  pattern="^(?=.*[A-Z])(?=.*\d).{8,}$"
                  title="La contraseña debe incluir una mayuscula, un numero y debe ser de 8 caracteres minimo. "
                  required
                />
              </div>
              <div className="col-span-6">
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Email
                </label>
                <input
                  id="biography"
                  type="email"
                  name="email"
                  className="block focus:bg-myOrange-100 outline-none p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500 transition-colors"
                  placeholder="bonn1e@aec.org"
                ></input>
              </div>
            </div>

            <div className="items-center py-6 border-t border-gray-200 rounded-b">
              <button
                className="font-medium px-5 py-2 bg-slate-900 text-slate-200 hover:bg-slate-700 rounded-sm transition-colors"
                type="submit"
              >
                Editar usuario
              </button>
            </div>
          </form>
        </div>
      </article>
    </div>
  )
}
export default EditModal
