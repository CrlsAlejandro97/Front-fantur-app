import List from '../component/List';


export default function Navbar() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
     <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a class="flex items-center">
          <img src='' className="mr-3 h-6 sm:h-9" alt="Fantur Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Fantur</span>
        </a>             
        <List />
      </div>
    </nav>
  )
}