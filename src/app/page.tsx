import Image from "next/image"

function LoginPage() {
  return (
    <div className="flex items-center min-h-screen bg-gray-50">
      <div className="flex-1 h-full max-w-4xl mx-auto bg-white rounded-lg shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="h-32 md:h-auto md:w-1/2">
            <Image
              className="object-cover w-full h-full"
              src="/Login_image.webp"
              alt="img"
              width={500}
              height={500}
              priority
            />
          </div>
          <div className="flex items-center justify-center p-6 sm:p-12 md:w-1/2">
            <div className="w-full">
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-20 h-20 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {/* ... (SVG paths) */}
                </svg>
              </div>
              <h1 className="mb-4 text-2xl font-bold text-center text-gray-700">
                Login to Your Account
              </h1>
              {/* ... (Rest of the HTML code) */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default LoginPage

{
  /* <div className="fixed inset-0 z-10 hidden bg-gray-900/50 dark:bg-gray-900/90" id="sidebarBackdrop"></div> */
}
