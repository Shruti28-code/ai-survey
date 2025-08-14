import React from 'react';
import './App.css'

function App() {


  return (
    <>
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-green-800 mb-4">
          🚀 Tailwind CSS is Working!
        </h1>
        <p className="text-lg text-pink-600">
          If you can see this styled box, Tailwind is set up correctly in your Vite + React project.
        </p>
        <button className="mt-6 px-6 py-3 bg-yellow-600 text-pink rounded-2xl shadow hover:bg-blue-700 transition duration-300">
          Click Me
        </button>
      </div>
    </>
  )
}

export default App
