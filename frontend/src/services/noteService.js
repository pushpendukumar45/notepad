import API from "../api/axios"

// Get all notes
export const getAllNotes = async () => {
  const response = await API.get("/notes")
  return response.data
}

// Get single note
export const getNote = async (id) => {
  const response = await API.get(`/notes/${id}`)
  return response.data
}

// Create note
export const createNote = async (noteData) => {
  const response = await API.post("/notes", noteData)
  return response.data
}

// Update note
export const updateNote = async (id, noteData) => {
  const response = await API.put(`/notes/${id}`, noteData)
  return response.data
}

// Delete note
export const deleteNote = async (id) => {
  const response = await API.delete(`/notes/${id}`)
  return response.data
}
