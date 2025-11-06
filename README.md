# MERN Notepad Application

A full-stack notepad application built with MongoDB, Express, React, and Node.js. Users can create, edit, view, and delete notes with a clean and responsive interface.

## Features

- Create, read, update, and delete notes (CRUD operations)
- Each note has a title, content, and automatic timestamps
- Search notes by title or content
- Responsive design with Tailwind CSS
- Loading states and error handling
- RESTful API architecture

## Tech Stack

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS enabled

**Frontend:**
- React 18
- React Router v6
- Axios for API calls
- Tailwind CSS for styling

## Prerequisites

Before running this application, make sure you have:

- Node.js (v14 or higher)
- MongoDB installed locally OR MongoDB Atlas account
- npm or yarn package manager

## Usage

1. **Create a Note**: Click the "+ New Note" button in the header
2. **View a Note**: Click on any note card from the home page
3. **Edit a Note**: Click the "Edit" button on a note card or from the note view page
4. **Delete a Note**: Click the "Delete" button and confirm the action
5. **Search Notes**: Use the search bar on the home page to filter notes by title or content

## Troubleshooting

**Backend won't start:**
- Make sure MongoDB is running (if using local MongoDB)
- Check your MongoDB connection string in `.env`
- Verify port 5000 is not already in use

**Frontend can't connect to backend:**
- Ensure backend server is running on port 5000
- Check the proxy setting in `frontend/package.json`
- Clear browser cache and restart the development server

**CORS errors:**
- The backend has CORS enabled by default
- If issues persist, check the CORS configuration in `backend/server.js`

## Future Enhancements (Optional)

- User authentication with JWT
- Rich text editor for note content
- Categories/tags for notes
- Note sharing functionality
- Dark mode toggle
- Export notes as PDF or Markdown

## License

This project is open source and available under the MIT License.
