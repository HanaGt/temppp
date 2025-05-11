"use client"

import type React from "react"

import { useState } from "react"
import { useSetRecoilState } from "recoil"
import { todoListState } from "../state/atoms"
import { Plus } from "lucide-react"

function TodoItemCreator() {
  const [inputValue, setInputValue] = useState("")
  const setTodoList = useSetRecoilState(todoListState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const addItem = () => {
    if (inputValue.trim() === "") return

    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: Date.now(),
        text: inputValue,
        isComplete: false,
        createdAt: Date.now(),
      },
    ])
    setInputValue("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      addItem()
    }
  }

  return (
    <div className="flex items-center">
      <div className="relative flex-1">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Plus className="h-5 w-5 text-purple-600" />
        </div>
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          className="w-full pl-10 pr-4 py-3 border-b border-gray-200 focus:outline-none focus:border-purple-500 text-gray-700 placeholder-gray-400"
          placeholder="Add a new task..."
        />
      </div>
      <button
        onClick={addItem}
        className="ml-4 px-6 py-2 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all hover:scale-105 active:scale-95"
      >
        Add Item
      </button>
    </div>
  )
}

export default TodoItemCreator
