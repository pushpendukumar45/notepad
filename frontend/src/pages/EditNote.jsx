"use client"

import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import NoteForm from "../components/NoteForm"
import { getNote, updateNote } from "../services/noteService"

const EditNote = () => {
  const [note, setNote] = useState(null)
  const [loading, setLoading] = useState(false)
  const [fetchLoading, setFetchLoading] = useState(true)
  const [error, setError] = useState("")
  const navigate = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    fetchNote()
  }, [id])

  const fetchNote = async () => {
    try {
      setFetchLoading(true)
      const response = await getNote(id)
      setNote(response.data)
      setError("")
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch note")
    } finally {
      setFetchLoading(false)
    }
  }

  const handleSubmit = async (noteData) => {
    setLoading(true)
    try {
      await updateNote(id, noteData)
      navigate("/")
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  if (fetchLoading) {
    return (
      <div className="flex items-center justify-center min-h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  if (error) {
    return <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md">{error}</div>
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Edit Note</h1>
      <NoteForm note={note} onSubmit={handleSubmit} loading={loading} />
    </div>
  )
}

export default EditNote
