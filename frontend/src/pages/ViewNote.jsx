"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate, Link } from "react-router-dom"
import { getNote, deleteNote } from "../services/noteService"

const ViewNote = () => {
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    fetchNote()
  }, [id])

  const fetchNote = async () => {
    try {
      setLoading(true)
      const response = await getNote(id)
      setNote(response.data)
      setError("")
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch note")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        await deleteNote(id)
        navigate("/")
      } catch (err) {
        alert(err.response?.data?.message || "Failed to delete note")
      }
    }
  }

  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" }
    return new Date(dateString).toLocaleDateString(undefined, options)
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">{error}</div>
  }

  if (!note) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 text-lg">Note not found</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-8 border border-gray-200">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{note.title}</h1>
        <div className="flex gap-4 text-sm text-gray-500">
          <p>Created: {formatDate(note.createdAt)}</p>
          {note.updatedAt && note.updatedAt !== note.createdAt && <p>Updated: {formatDate(note.updatedAt)}</p>}
        </div>
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-gray-700 whitespace-pre-wrap leading-relaxed">{note.content}</p>
      </div>

      <div className="flex gap-3 pt-6 border-t border-gray-200">
        <Link
          to={`/edit/${note._id}`}
          className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors text-center font-medium"
        >
          Edit Note
        </Link>
        <button
          onClick={handleDelete}
          className="flex-1 bg-red-600 text-white px-6 py-3 rounded-md hover:bg-red-700 transition-colors font-medium"
        >
          Delete Note
        </button>
        <Link
          to="/"
          className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-md hover:bg-gray-300 transition-colors text-center font-medium"
        >
          Back to Notes
        </Link>
      </div>
    </div>
  )
}

export default ViewNote
