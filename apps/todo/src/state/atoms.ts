import { atom, selector } from "recoil"

export interface Todo {
  id: number
  text: string
  isComplete: boolean
  createdAt: number
}

export const todoListState = atom<Todo[]>({
  key: "todoListState",
  default: [],
  effects: [
    ({ onSet }) => {
      onSet((newTodoList) => {
        localStorage.setItem("todos", JSON.stringify(newTodoList))
      })
    },
  ],
})

export type TodoFilter = "Show All" | "Show Completed" | "Show Uncompleted"

export const todoFilterState = atom<TodoFilter>({
  key: "todoFilterState",
  default: "Show All",
})

export const filteredTodoListState = selector({
  key: "filteredTodoListState",
  get: ({ get }) => {
    const filter = get(todoFilterState)
    const list = get(todoListState)

    switch (filter) {
      case "Show Completed":
        return list.filter((item) => item.isComplete)
      case "Show Uncompleted":
        return list.filter((item) => !item.isComplete)
      default:
        return list
    }
  },
})

export const todoListStatsState = selector({
  key: "todoListStatsState",
  get: ({ get }) => {
    const todoList = get(todoListState)
    const totalNum = todoList.length
    const totalCompletedNum = todoList.filter((item) => item.isComplete).length
    const totalUncompletedNum = totalNum - totalCompletedNum
    const percentCompleted = totalNum === 0 ? 0 : (totalCompletedNum / totalNum) * 100

    return {
      totalNum,
      totalCompletedNum,
      totalUncompletedNum,
      percentCompleted,
    }
  },
})
