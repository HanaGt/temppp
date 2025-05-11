import { useRecoilValue } from "recoil"
import { todoListStatsState } from "../state/atoms"

function TodoListStats() {
  const { totalNum, totalCompletedNum, totalUncompletedNum, percentCompleted } = useRecoilValue(todoListStatsState)

  const formattedPercentCompleted = Math.round(percentCompleted)

  return (
    <div className="flex justify-between text-sm text-gray-500 mb-4">
      <span>Total: {totalNum}</span>
      <span>Completed: {totalCompletedNum}</span>
      <span>Remaining: {totalUncompletedNum}</span>
      <span>Progress: {formattedPercentCompleted}%</span>
    </div>
  )
}

export default TodoListStats
