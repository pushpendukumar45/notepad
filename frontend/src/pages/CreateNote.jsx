"use client"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import NoteForm from "../components/NoteForm"
import { createNote } from "../services/noteService"

const CreateNote = () => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (noteData) => {
    setLoading(true)
    try {
      await createNote(noteData)
      navigate("/")
    } catch (error) {
      throw error
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Create New Note</h1>
      <NoteForm onSubmit={handleSubmit} loading={loading} />
    </div>
  )
}

export default CreateNote
