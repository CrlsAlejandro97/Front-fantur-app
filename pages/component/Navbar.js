import NavbarElto from "./NavbarElto"

export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
      <div className="container flex flex-wrap justify-between items-center mx-auto">             
            {
              //Botones principales
            }
           <div className="hidden justify-between items-center w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
              <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                  <NavbarElto href="/">Home</NavbarElto>
              </ul>
            </div>
          </div>
    </nav>
  )
}