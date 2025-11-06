const Note = require("../models/Note")

// @desc    Get all notes
// @route   GET /api/notes
// @access  Public
const getNotes = async (req, res) => {
  try {
    const notes = await Note.find().sort({ updatedAt: -1 })
    res.status(200).json({
      success: true,
      count: notes.length,
      data: notes,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching notes",
      error: error.message,
    })
  }
}

// @desc    Get single note
// @route   GET /api/notes/:id
// @access  Public
const getNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      })
    }

    res.status(200).json({
      success: true,
      data: note,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error fetching note",
      error: error.message,
    })
  }
}

// @desc    Create new note
// @route   POST /api/notes
// @access  Public
const createNote = async (req, res) => {
  try {
    const { title, content } = req.body

    if (!title || !content) {
      return res.status(400).json({
        success: false,
        message: "Please provide both title and content",
      })
    }

    const note = await Note.create({
      title,
      content,
    })

    res.status(201).json({
      success: true,
      data: note,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error creating note",
      error: error.message,
    })
  }
}

// @desc    Update note
// @route   PUT /api/notes/:id
// @access  Public
const updateNote = async (req, res) => {
  try {
    const { title, content } = req.body

    let note = await Note.findById(req.params.id)

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      })
    }

    note = await Note.findByIdAndUpdate(
      req.params.id,
      { title, content },
      {
        new: true,
        runValidators: true,
      },
    )

    res.status(200).json({
      success: true,
      data: note,
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating note",
      error: error.message,
    })
  }
}

// @desc    Delete note
// @route   DELETE /api/notes/:id
// @access  Public
const deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id)

    if (!note) {
      return res.status(404).json({
        success: false,
        message: "Note not found",
      })
    }

    await note.deleteOne()

    res.status(200).json({
      success: true,
      message: "Note deleted successfully",
      data: {},
    })
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting note",
      error: error.message,
    })
  }
}

module.exports = {
  getNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
}
