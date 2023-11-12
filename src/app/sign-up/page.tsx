import Image from "next/image"
import Link from "next/link"

function RegisterPage() {
  return (
    <section className="w-full h-screen flex flex-col items-center justify-center">
      <picture>
        <Image
          src={"/SignUp_imageSun.webp"}
          alt="sunset sign up"
          // width={300}
          // height={600}
          className="block w-screen h-[300px]"
          objectFit="cover"
          layout="fill"
          priority
        />
      </picture>

      <div
        className="px-6 lg:px-12 shadow-lg rounded-md"
        style={{
          marginTop: "-100px",
          background: "hsla(0, 0%, 100%, 0.7)",
          backdropFilter: "blur(30px)",
        }}
      >
        <div className="py-12 px-md-5">
          <div className="mx-auto max-w-lg">
            <h2 className="text-3xl text-center font-semibold mb-5 text-slate-800">
              Registrate Ahora
            </h2>
            <form className="space-y-4">
              <div className="flex space-x-4 flex-wrap">
                <div className="flex-1 ">
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder="Pedro"
                    className="mt-1 p-2 w-full border rounded-md text-slate-600 focus:border-myOrange-400 focus:outline-none focus:ring-1 focus:ring-myOrange-500 focus:shadow-md"
                    required
                  />
                </div>
                <div className="flex-1">
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder="Martinez"
                    className="mt-1 p-2 w-full border rounded-md text-slate-600 focus:border-myOrange-400 focus:outline-none focus:ring-1 focus:ring-myOrange-500 focus:shadow-md"
                    required
                  />
                </div>
              </div>

              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="example@example.com"
                className="mt-1 p-2 w-full border rounded-md text-slate-600 focus:border-myOrange-400 focus:outline-none focus:ring-1 focus:ring-myOrange-500 focus:shadow-md"
                required
              />

              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="mt-1 p-2 w-full border rounded-md text-slate-600 focus:border-myOrange-400 focus:outline-none focus:ring-1 focus:ring-myOrange-500 focus:shadow-md"
                required
              />
              <Link
                className="text-sm space-y-4 text-myOrange-600 hover:underline hover:text-myOrange-500"
                href="/"
              >
                Ya tienes cuenta ?
              </Link>

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
                Sign up
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
export default RegisterPage
