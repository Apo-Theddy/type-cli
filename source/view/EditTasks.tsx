import React, { useState } from "react"
import { Text, Box } from "ink"
import { Select } from "@inkjs/ui"
import TextInput from "ink-text-input"
import { updateTask, getTaskById } from "../services/task.services.js"
import type { Route } from "../app.js"
import { statusOption } from "../constants/statusOptions.js"

type Props = {
  taskId: number
  onNavigate: (route: Route) => void
}

export function EditTasks({ taskId, onNavigate }: Props) {

  const taskData = getTaskById(taskId)

  const [field, setField] = useState<"name" | "description" | "status">("name")
  const [error, setError] = useState("")

  const [task, setTask] = useState({
    name_task: "",
    description: ""
  })

  function handleNameSubmit() {
    if (!task.name_task.trim()) {
      setError("El nombre no puede estar vacío")
      return
    }
    setError("")
    setField("description")
  }

  function handleDescriptionSubmit() {
    if (!task.description.trim()) {
      setError("La descripción no puede estar vacía")
      return
    }
    setError("")
    setField("status")
  }

  function save(status: string) {
    updateTask(taskId, {
      name_task: task.name_task,
      description: task.description,
      status
    })

    onNavigate("view_tasks")
  }

  return (
    <Box flexDirection="column">

      {error && <Text color="red">{error}</Text>}

      {field === "name" && (
        <>
          <Text>Editar nombre</Text>
          <TextInput
            value={task.name_task}
            placeholder={taskData.name_task}
            onChange={(value) => setTask({ ...task, name_task: value })}
            onSubmit={handleNameSubmit}
          />
        </>
      )}

      {field === "description" && (
        <>
          <Text>Editar descripción</Text>
          <TextInput
            value={task.description}
            placeholder={taskData.description}
            onChange={(value) => setTask({ ...task, description: value })}
            onSubmit={handleDescriptionSubmit}
          />
        </>
      )}

      {field === "status" && (
        <>
          <Text>Editar estado</Text>
          <Select options={statusOption} onChange={save} />
        </>
      )}

    </Box>
  )
}