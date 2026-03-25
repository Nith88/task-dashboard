import { Link } from 'react-router-dom'

function TaskCard({ task }) {
  const statusClass = task.completed ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'

  return (
    <article className="bg-gradient-to-br from-slate-50 to-white border border-transparent rounded-2xl p-5 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">{task.title}</h3>
          <p className="text-xs text-slate-500 uppercase tracking-wide mt-1">User ID: {task.userId}</p>
        </div>
        <span className={`px-3 py-1.5 rounded-full text-xs font-semibold ${statusClass}`}>{task.completed ? 'Completed' : 'Pending'}</span>
      </div>
      <Link
        to={`/tasks/${task.id}`}
        className="mt-4 inline-flex items-center gap-1 text-teal-700 hover:text-teal-900 text-sm font-medium"
      >
        View details
      </Link>
    </article>
  )
}

export default TaskCard
