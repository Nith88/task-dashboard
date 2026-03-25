import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Tasks from './pages/Tasks'
import TaskDetail from './pages/TaskDetail'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<Tasks />} />
        <Route path="/tasks/:id" element={<TaskDetail />} />
        <Route path="*" element={
          <main className="container px-4 py-8">
            <h2 className="text-2xl font-bold">404: Page not found</h2>
            <p className="mt-3 text-slate-500">Check the URL and try again.</p>
          </main>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App
