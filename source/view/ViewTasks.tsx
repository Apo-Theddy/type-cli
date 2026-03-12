import React from "react"
import { Text } from "ink"
import { Select } from "@inkjs/ui"
import { getTask } from "../services/task.services.js"

type Props = {
  onSelectTask: (id: number) => void
}

export function ViewTasks({ onSelectTask }: Props) {

  const tasks = getTask()

  const options = tasks.map((task) => ({
    label: task.name_task,
    value: String(task.id)
  }))
  
  return (
    <>
      <Text>Todas las tareas</Text>
      <Select
        options={options}
        onChange={(value) => onSelectTask(Number(value))}
      />
    </>
  )
}