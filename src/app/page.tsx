import Image from "next/image"
import GitHubIcon from "@mui/icons-material/GitHub"
import GoogleIcon from "@mui/icons-material/Google"
import Link from "next/link"

function LoginPage() {
  return (
    <div className="flex items-center min-h-screen bg-slate-50 select-none">
      <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg lg:shadow-2xl">
        <form className="flex flex-col md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <Image
              className="object-cover w-full h-full rounded-tl-lg rounded-bl-lg"
              src="/Login_image.webp"
              alt="img"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2 ">
            <div className="w-full">
              <div className="flex justify-center ">
                <Image
                  src={"/GMAP_logo_withouthBg.webp"}
                  alt="GMAP Logo"
                  width={70}
                  height={70}
                  priority
                />
              </div>
              <h1 className="mb-4 text-2xl font-bold text-center text-slate-700">
                Inicia sesion en tu cuenta
              </h1>
              <div className="space-y-2">
                <label
                  className="block text-sm text-slate-500"
                  htmlFor="login_id"
                >
                  Codigo Estudiantil
                </label>
                <input
                  id="login_id"
                  type="number"
                  className="w-full px-4 py-2 text-sm text-slate-500 border rounded-md focus:border-myOrange-400 focus:outline-none focus:ring-1 focus:ring-myOrange-500 focus:shadow-md"
                  placeholder="20181020172"
                  required
                />
              </div>
              <div className="space-y-2">
                <label
                  className="block mt-4 text-sm text-slate-500"
                  htmlFor="login_password"
                >
                  Contraseña
                </label>
                <input
                  id="login_password"
                  className="w-full px-4 py-2 text-sm text-slate-500 border rounded-md focus:border-myOrange-400 focus:outline-none focus:ring-1 focus:ring-myOrange-500 focus:shadow-md"
                  type="password"
                  placeholder="********"
                  pattern="^(?=.*[A-Z])(?=.*\d).{8,}$"
                  title="La contraseña debe incluir una mayuscula, un numero y debe ser de 8 caracteres minimo. "
                />
              </div>
              <p className="mt-4">
                <Link
                  className="text-sm text-myOrange-500 hover:underline"
                  href="/sign-up"
                >
                  No tienes cuenta ?
                </Link>
              </p>
              <button
                type="submit"
                className="block w-full px-4 py-2 mt-4 text-sm font-medium leading-5 text-center text-white transition-colors duration-150 bg-myOrange-500 border border-transparent rounded-lg active:bg-myOrange-700 hover:bg-myOrange-600 focus:outline-none focus:shadow-outline-blue"
              >
                Iniciar Sesion
              </button>

              <hr className="my-8" />

              <div className="flex items-center justify-center gap-4">
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-4 py-2 text-sm bg-slate-800 text-slate-200 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500"
                >
                  <GitHubIcon />
                  Github
                </button>
                <button
                  type="button"
                  className="flex items-center justify-center w-full px-4 py-2 text-sm text-gray-700 border border-gray-300 rounded-lg hover:border-gray-500 focus:border-gray-500"
                >
                  <GoogleIcon />
                  Google
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default LoginPage

{
  /* <div className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div> */
}
