"use client"

import type React from "react"

import { useRecoilState } from "recoil"
import { todoFilterState, type TodoFilter } from "../state/atoms"

function TodoListFilters() {
  const [filter, setFilter] = useRecoilState(todoFilterState)

  const updateFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter(e.target.value as TodoFilter)
  }

  return (
    <div className="flex items-center justify-end mb-4">
      <label htmlFor="filter" className="mr-2 text-sm text-gray-600">
        Filter:
      </label>
      <select
        id="filter"
        value={filter}
        onChange={updateFilter}
        className="p-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
      >
        <option value="Show All">All</option>
        <option value="Show Completed">Completed</option>
        <option value="Show Uncompleted">Uncompleted</option>
      </select>
    </div>
  )
}

export default TodoListFilters
