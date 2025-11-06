export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full bg-white rounded-lg shadow-xl p-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">MERN Notepad Application</h1>
          <p className="text-gray-600">MongoDB + Express + React + Node.js</p>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-6">
          <h2 className="text-xl font-semibold text-blue-900 mb-2">Download Required</h2>
          <p className="text-blue-800">
            This is a traditional MERN stack application that needs to be downloaded and run locally with your own
            MongoDB instance.
          </p>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">How to Install:</h3>
            <ol className="list-decimal list-inside space-y-2 text-gray-700">
              <li>Click the three dots menu in the top right corner</li>
              <li>Select "Download ZIP" to download all project files</li>
              <li>Extract the ZIP file to your desired location</li>
              <li>Follow the setup instructions in the README.md file</li>
            </ol>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Quick Start:</h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-gray-700 mb-1">Backend Setup:</p>
                <code className="block bg-gray-800 text-green-400 p-3 rounded text-sm">
                  cd backend
                  <br />
                  npm install
                  <br />
                  cp .env.example .env
                  <br />
                  npm run dev
                </code>
              </div>
              <div>
                <p className="font-medium text-gray-700 mb-1">Frontend Setup:</p>
                <code className="block bg-gray-800 text-green-400 p-3 rounded text-sm">
                  cd frontend
                  <br />
                  npm install
                  <br />
                  npm start
                </code>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Features Included:</h3>
            <ul className="grid grid-cols-2 gap-2 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Create, edit, delete notes
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Search functionality
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Automatic timestamps
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Responsive design
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> REST API with Express
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> MongoDB with Mongoose
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Error handling
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-600">✓</span> Loading states
              </li>
            </ul>
          </div>

          <div className="bg-yellow-50 border-l-4 border-yellow-600 p-4">
            <h3 className="text-lg font-semibold text-yellow-900 mb-2">Prerequisites:</h3>
            <ul className="list-disc list-inside space-y-1 text-yellow-800">
              <li>Node.js (v14 or higher)</li>
              <li>MongoDB installed locally OR MongoDB Atlas account</li>
              <li>npm or yarn package manager</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            For detailed instructions, see the <span className="font-semibold">README.md</span> file included in the
            download.
          </p>
        </div>
      </div>
    </div>
  )
}
