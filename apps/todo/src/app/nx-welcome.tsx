"use client"

import { motion } from "framer-motion"

export function NxWelcome() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4"
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-purple-600 mb-2">Welcome to Your Todo App!</h1>
        <p className="text-gray-600">Built with NX, React, RecoilJS, and Tailwind CSS</p>
      </motion.div>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Features:</h2>
        <ul className="space-y-2 text-left">
          <li className="flex items-center">
            <span className="mr-2 text-green-500">✓</span>
            <span>Add, complete, and delete todos</span>
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">✓</span>
            <span>Filter by completion status</span>
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">✓</span>
            <span>Persistent storage with localStorage</span>
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">✓</span>
            <span>Smooth animations and transitions</span>
          </li>
          <li className="flex items-center">
            <span className="mr-2 text-green-500">✓</span>
            <span>Fully responsive design</span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  )
}

export default NxWelcome
