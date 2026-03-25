import { useEffect, useState } from 'react'
import TaskCard from '../components/TaskCard'

function Tasks() {
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchTasks() {
      try {
        setLoading(true)
        const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        if (!res.ok) throw new Error('Unable to load tasks')
        const data = await res.json()
        setTasks(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchTasks()
  }, [])

  return (
    <main className="container px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Tasks</h2>
      <p className="text-sm text-slate-600 mb-5">Showing top 10 tasks from JSONPlaceholder. Keep your workflow organized.</p>
      {loading && <p className="text-slate-500">Loading tasks...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {!loading && !error && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </main>
  )
}

export default Tasks
