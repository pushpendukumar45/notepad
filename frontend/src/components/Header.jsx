import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold hover:text-blue-100 transition-colors">
            Notepad App
          </Link>
          <Link
            to="/create"
            className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition-colors font-medium"
          >
            + New Note
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
