"use client"

import { Maratonista } from "@/utils/userType"
import Image from "next/image"
import Link from "next/link"

// complete method

// async function createUser({
//   student_id,
//   first_name,
//   last_name,
//   password,
//   email,
//   team,
//   course_check,
// }: Maratonista) {
//   const request = await fetch("http://localhost:3000/api/users", {
//     method: "POST",
//     headers: {
//       'content-type': 'application/json',

//     },
//     body: JSON.stringify()
//   })
// }

const inputStyle: string =
  "mt-1 p-2 w-full border rounded-md text-slate-600 focus:border-myOrange-400 focus:outline-none focus:ring-1 focus:ring-myOrange-500 focus:shadow-md"

const teams: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9]
const signatures: string[] = [
  "programacion basica",
  "programacion orientada a objetos",
  "programacion avanzada",
]

function RegisterPage() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <picture>
        <Image
          src={"/SignUp_imageSun.webp"}
          alt="sunset sign up"
          className="block w-screen h-[300px]"
          objectFit="cover"
          layout="fill"
          priority
        />
      </picture>

      <div
        className="px-6 lg:px-12 shadow-lg rounded-md"
        style={{
          background: "hsla(0, 0%, 100%, 0.7)",
          backdropFilter: "blur(30px)",
        }}
      >
        <div className="pb-12">
          <div className="max-w-lg">
            <picture className="w-full flex justify-center py-4">
              <Image
                src={"/GMAP_logo_withouthBg.webp"}
                alt="GMAP logo"
                width={100}
                height={120}
                priority
              />
            </picture>
            <h2 className="text-3xl text-center font-semibold mb-5 text-slate-800">
              Registrate Ahora
            </h2>
            <form className="space-y-3">
              <div className="flex space-x-4 flex-wrap">
                <div className="flex-1 ">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Primer Nombre
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Pedro"
                    className={inputStyle}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Primer Apellido
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Martinez"
                    className={inputStyle}
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Codigo Estudiantil
                  </label>
                  <input
                    type="number"
                    id="lastName"
                    name="lastName"
                    placeholder="20181020172"
                    className={inputStyle}
                    pattern="^[1-9]\d*$"
                    required
                  />
                </div>
              </div>

              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electronico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                className={inputStyle}
                required
              />

              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="********"
                className={inputStyle}
                required
              />
              <div>
                <Link
                  className="text-sm space-y-4 text-myOrange-500 hover:underline hover:text-myOrange-600"
                  href="/"
                >
                  Ya tienes cuenta ?
                </Link>
              </div>

              <div className="flex space-x-4 flex-wrap">
                <div className="flex-1 ">
                  <label
                    htmlFor="team"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Equipo
                  </label>
                  <select id="team" name="team" className={inputStyle} required>
                    {teams.map((team) => (
                      <option key={team} value={team}>
                        {team}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="signature"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Ultima materia cursada / cursando
                  </label>
                  <select
                    id="signature"
                    name="signature"
                    className={inputStyle}
                    required
                  >
                    {signatures.map((signature) => (
                      <option key={signature} value={signature}>
                        {signature}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="subscribe"
                  name="subscribe"
                  className="h-4 w-4 accent-myOrange-400 border-gray-300 rounded focus:border-myOrange-400 focus:outline-none focus:ring-1 focus:ring-myOrange-500 focus:shadow-md"
                  required
                />
                <label
                  htmlFor="subscribe"
                  className="text-sm font-medium text-gray-700"
                >
                  Aceptar termino y condiciones.
                </label>
              </div>

              <button
                type="submit"
                className="bg-myOrange-500 transition-colors w-full text-white px-4 py-2 rounded-md hover:bg-myOrange-600 focus:border-myOrange-100 focus:outline-none focus:ring-1 focus:ring-myOrange-300 focus:shadow-md"
              >
                Registrarse
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default RegisterPage
