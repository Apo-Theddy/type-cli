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
      setTask({
        ...task,
        name_task: taskData.name_task
      })
    }
    setError("")
    setField("description")
  }

  function handleDescriptionSubmit() {
    if (!task.description.trim()) {
      setTask({
        ...task,
        description: taskData.description
      })
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
    <Box
      flexDirection="column"
      borderStyle="round"
      borderColor="magenta"
      padding={1}
      width={60}
    >

      <Box justifyContent="center">
        <Text bold color="magentaBright">
          Editar tarea
        </Text>
      </Box>

      <Box justifyContent="center">
        <Text color="gray">
          {field === "name"
            ? "Actualizar nombre"
            : field === "description"
            ? "Actualizar descripción"
            : "Actualizar estado"}
        </Text>
      </Box>

      {error && (
        <Box justifyContent="center" marginTop={1}>
          <Text color="red">{error}</Text>
        </Box>
      )}

      <Box
        marginTop={1}
        borderStyle="single"
        borderColor={error ? "red" : "gray"}
        padding={1}
        flexDirection="column"
      >

        {field === "name" && (
          <>
            <Text>Actual: {taskData.name_task}</Text>
            <TextInput
              value={task.name_task}
              placeholder="Nuevo nombre..."
              onChange={(value) => setTask({ ...task, name_task: value })}
              onSubmit={handleNameSubmit}
            />
          </>
        )}

        {field === "description" && (
          <>
            <Text>Actual: {taskData.description}</Text>
            <TextInput
              value={task.description}
              placeholder="Nueva descripción..."
              onChange={(value) => setTask({ ...task, description: value })}
              onSubmit={handleDescriptionSubmit}
            />
          </>
        )}

        {field === "status" && (
          <Select options={statusOption} onChange={save} />
        )}

      </Box>

    </Box>
  )
}