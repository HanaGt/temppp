// filepath: /home/hana/Documents/temp/apps/todo/src/app/page.tsx
"use client"

import { useEffect } from "react"
import { useRecoilState, useRecoilValue, RecoilRoot } from "recoil"
import { filteredTodoListState, todoFilterState } from "../state/atoms"
import TodoItem from "../components/TodoItem"
import TodoItemCreator from "../components/TodoItemCreator"
import TodoListFilters from "../components/TodoListFilters"
import TodoListStats from "../components/TodoListStats"

function App() {
  const todoList = useRecoilValue(filteredTodoListState)
  const [filter, setFilter] = useRecoilState(todoFilterState)

  // Load todos from localStorage on initial render
  useEffect(() => {
    const savedTodos = localStorage.getItem("todos")
    if (savedTodos) {
      try {
        const parsedTodos = JSON.parse(savedTodos)
        // Set the todoListState with the parsed todos
      } catch (e) {
        console.error("Failed to parse saved todos", e)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center pt-8 px-4 sm:px-6">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Todo List</h1>

          <div className="mb-6">
            <TodoListStats />
            <TodoListFilters />
          </div>

          <div className="space-y-4">
            {todoList.map((todo) => (
              <div key={todo.id} className="todo-item-animation">
                <TodoItem item={todo} />
              </div>
            ))}
          </div>

          <div className="mt-6">
            <TodoItemCreator />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Page() {
  return (
    <RecoilRoot>
      <App />
    </RecoilRoot>
  )
}