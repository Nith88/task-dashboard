import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

function TaskDetail() {
  const { id } = useParams()
  const [task, setTask] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function fetchTask() {
      try {
        setLoading(true)
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`)
        if (!res.ok) throw new Error('Task not found')
        const data = await res.json()
        setTask(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    if (id) fetchTask()
  }, [id])

  return (
    <main className="container px-4 py-8">
      <div className="mb-4">
        <Link to="/tasks" className="text-blue-600 hover:text-blue-700 font-medium">
          &larr; Back to Tasks
        </Link>
      </div>

      {loading && <p className="text-slate-500">Loading task...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {task && (
        <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Task #{task.id}</h2>
          <p className="mt-3 text-slate-700">Title: {task.title}</p>
          <p className="text-slate-700">User ID: {task.userId}</p>
          <p className={`mt-2 inline-block rounded-full px-3 py-1 text-sm font-semibold ${task.completed ? 'bg-green-100 text-green-900' : 'bg-yellow-100 text-yellow-900'}`}>
            {task.completed ? 'Completed' : 'Pending'}
          </p>
        </section>
      )}
    </main>
  )
}

export default TaskDetail
