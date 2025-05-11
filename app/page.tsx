"use client"

import { RecoilRoot } from "recoil"
import TodoApp from "@/components/TodoApp"

export default function Page() {
  return (
    <RecoilRoot>
      <TodoApp />
    </RecoilRoot>
  )
}
