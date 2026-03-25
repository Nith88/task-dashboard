import { NavLink } from 'react-router-dom'

function Navbar() {
  const activeStyles = 'text-blue-600 font-semibold border-b-2 border-blue-600'
  const inactiveStyles = 'text-slate-700 hover:text-blue-600'

  return (
    <header className="bg-white shadow-sm sticky top-0 z-20">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-lg md:text-xl font-bold text-slate-900">Task Dashboard</h1>
        <nav className="space-x-4">
          <NavLink to="/" end className={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}>
            Home
          </NavLink>
          <NavLink to="/tasks" className={({ isActive }) => (isActive ? activeStyles : inactiveStyles)}>
            Tasks
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
