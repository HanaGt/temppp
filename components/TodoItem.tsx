"use client"

import { useRecoilState } from "recoil"
import { todoListState, type Todo } from "@/lib/atoms"
import { CheckCircle, Circle, Trash2 } from "lucide-react"

interface TodoItemProps {
  item: Todo
}

export default function TodoItem({ item }: TodoItemProps) {
  const [todoList, setTodoList] = useRecoilState(todoListState)

  const toggleItemCompletion = () => {
    const newList = todoList.map((listItem) =>
      listItem.id === item.id ? { ...listItem, isComplete: !listItem.isComplete } : listItem,
    )
    setTodoList(newList)
  }

  const deleteItem = () => {
    const newList = todoList.filter((listItem) => listItem.id !== item.id)
    setTodoList(newList)
  }

  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-200 group">
      <div className="flex items-center">
        <button
          onClick={toggleItemCompletion}
          className="focus:outline-none mr-3 transition-transform hover:scale-110"
          aria-label={item.isComplete ? "Mark as incomplete" : "Mark as complete"}
        >
          {item.isComplete ? (
            <div className="text-purple-600">
              <CheckCircle className="h-6 w-6" />
            </div>
          ) : (
            <div className="text-purple-600">
              <Circle className="h-6 w-6" />
            </div>
          )}
        </button>
        <span className={`text-lg ${item.isComplete ? "text-gray-400 line-through" : "text-gray-800"}`}>
          {item.text}
        </span>
      </div>
      <button
        onClick={deleteItem}
        className="text-gray-400 hover:text-red-500 focus:outline-none opacity-0 group-hover:opacity-100 transition-opacity hover:scale-110"
        aria-label="Delete todo"
      >
        <Trash2 className="h-5 w-5" />
      </button>
    </div>
  )
}
