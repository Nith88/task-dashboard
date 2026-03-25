import { NavLink } from 'react-router-dom'

function Navbar() {
  const activeStyles = 'text-white font-bold border-b-2 border-white'
  const inactiveStyles = 'text-cyan-100 hover:text-white transition-colors'

  return (
    <header className="sticky top-0 z-20 bg-gradient-to-r from-indigo-600 via-sky-600 to-cyan-500 shadow-xl">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 className="text-lg md:text-xl font-extrabold text-white tracking-wide">Task Dashboard</h1>
        <nav className="space-x-6">
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
