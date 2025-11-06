"use client"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState } from "react"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import Home from "./pages/Home"
import CreateNote from "./pages/CreateNote"
import EditNote from "./pages/EditNote"
import ViewNote from "./pages/ViewNote"

function App() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
                  <Home searchQuery={searchQuery} />
                </>
              }
            />
            <Route path="/create" element={<CreateNote />} />
            <Route path="/edit/:id" element={<EditNote />} />
            <Route path="/note/:id" element={<ViewNote />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
