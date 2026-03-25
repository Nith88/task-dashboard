import { Link } from 'react-router-dom'

function TaskCard({ task }) {
  const statusClass = task.completed ? 'bg-green-100 text-green-900' : 'bg-yellow-100 text-yellow-900'

  return (
    <article className="block border border-slate-200 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{task.title}</h3>
          <p className="text-sm text-slate-600 mt-1">User ID: {task.userId}</p>
        </div>
        <span className={`px-2 py-1 rounded text-xs font-medium ${statusClass}`}>{task.completed ? 'Completed' : 'Pending'}</span>
      </div>
      <Link
        to={`/tasks/${task.id}`}
        className="mt-3 inline-block text-blue-600 hover:text-blue-700 text-sm font-medium"
      >
        View details
      </Link>
    </article>
  )
}

export default TaskCard
