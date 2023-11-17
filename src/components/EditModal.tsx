"use client"
import { useGlobalContext } from "@/utils/context"
import CloseRoundedIcon from "@mui/icons-material/CloseRounded"
import VisibilityRoundedIcon from "@mui/icons-material/VisibilityRounded"
import VisibilityOffRoundedIcon from "@mui/icons-material/VisibilityOffRounded"
import { useState } from "react"
import Swal from "sweetalert2"

// const handleEditSubmit = async (userId: number) => {
//   const formData = new FormData()

//   await fetch(`/api/users/${userId}`, {
//     method: "PUT",
//     body: formData,
//   })
//   Swal.fire({
//     title: "Datos editados",
//     icon: "success",
//     confirmButtonText: "Ok",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       window.location.reload()
//     }
//   })
// }

function EditModal() {
  const { closeModal } = useGlobalContext()
  const [showPw, setShowPw] = useState(false)

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
          <form>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="first-name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Primer Nombre
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Bonnie"
                  defaultValue={""}
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="last-name"
                  className="block mb-2 text-sm font-medium text-gray-900"
                >
                  Primer Apellido
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="Clyde"
                  defaultValue={""}
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
                  name="new_pw"
                  id="new_pw"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="********"
                  defaultValue={""}
                  required
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label
                  htmlFor="position"
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
                  name="confirm_pw"
                  id="confirm_pw"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                  placeholder="********"
                  defaultValue={""}
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
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                  placeholder="bonn1e@aec.org"
                  defaultValue={""}
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
