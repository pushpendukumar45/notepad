"use client"
import { Link } from "react-router-dom"

const NoteList = ({ notes, onDelete, loading }) => {
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (notes.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">No notes yet. Create your first note!</p>
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {notes.map((note) => (
        <div
          key={note._id}
          className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200"
        >
          <Link to={`/note/${note._id}`} className="block mb-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2 hover:text-blue-600 transition-colors line-clamp-2">
              {note.title}
            </h3>
            <p className="text-gray-600 text-sm line-clamp-3 mb-3">{note.content}</p>
            <p className="text-xs text-gray-400">
              {note.updatedAt ? `Updated: ${formatDate(note.updatedAt)}` : `Created: ${formatDate(note.createdAt)}`}
            </p>
          </Link>
          <div className="flex gap-2 mt-4">
            <Link
              to={`/edit/${note._id}`}
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors text-center text-sm font-medium"
            >
              Edit
            </Link>
            <button
              onClick={() => onDelete(note._id)}
              className="flex-1 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors text-sm font-medium"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  )
}

export default NoteList
