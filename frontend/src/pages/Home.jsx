"use client"

import { useState, useEffect } from "react"
import NoteList from "../components/NoteList"
import { getAllNotes, deleteNote } from "../services/noteService"

const Home = ({ searchQuery }) => {
  const [notes, setNotes] = useState([])
  const [filteredNotes, setFilteredNotes] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    fetchNotes()
  }, [])

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredNotes(notes)
    } else {
      const filtered = notes.filter(
        (note) =>
          note.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          note.content.toLowerCase().includes(searchQuery.toLowerCase()),
      )
      setFilteredNotes(filtered)
    }
  }, [searchQuery, notes])

  const fetchNotes = async () => {
    try {
      setLoading(true)
      const response = await getAllNotes()
      setNotes(response.data)
      setFilteredNotes(response.data)
      setError("")
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch notes")
    } finally {
      setLoading(false)
    }
  }

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this note?")) {
      try {
        await deleteNote(id)
        setNotes(notes.filter((note) => note._id !== id))
      } catch (err) {
        alert(err.response?.data?.message || "Failed to delete note")
      }
    }
  }

  return (
    <div>
      {error && <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-md mb-6">{error}</div>}

      {searchQuery && (
        <div className="mb-4">
          <p className="text-gray-600">
            Found {filteredNotes.length} note{filteredNotes.length !== 1 ? "s" : ""} matching "{searchQuery}"
          </p>
        </div>
      )}

      <NoteList notes={filteredNotes} onDelete={handleDelete} loading={loading} />
    </div>
  )
}

export default Home
