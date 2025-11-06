const mongoose = require("mongoose")

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please add a title"],
      trim: true,
      maxlength: [100, "Title cannot be more than 100 characters"],
    },
    content: {
      type: String,
      required: [true, "Please add content"],
    },
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  },
)

module.exports = mongoose.model("Note", noteSchema)
