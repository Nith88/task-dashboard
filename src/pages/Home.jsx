import { useEffect, useState } from 'react'

function Home() {
  const [advice, setAdvice] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getAdvice() {
      try {
        setLoading(true)
        const res = await fetch('https://api.adviceslip.com/advice')
        if (!res.ok) throw new Error('Failed to fetch advice')
        const json = await res.json()
        setAdvice(json.slip.advice)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    getAdvice()
  }, [])

  return (
    <main className="container px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">Welcome to your task dashboard</h2>
      <p className="text-slate-700 mb-6">Stay focused with fresh advice and your task list.</p>

      <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
        <h3 className="text-xl font-semibold mb-2">Daily advice</h3>
        {loading ? (
          <div className="text-slate-500">Loading advice...</div>
        ) : error ? (
          <div className="text-red-600">{error}</div>
        ) : (
          <p className="text-slate-800">“{advice}”</p>
        )}
      </section>
    </main>
  )
}

export default Home
