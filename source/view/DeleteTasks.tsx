import React, { useState } from "react"
import { Text, Box } from "ink"
import { Select } from "@inkjs/ui"
import { deleteTask, getTasks } from "../services/task.services.js"
import type { Route } from "../app.js"

type Props = {
  onNavigate: (route: Route) => void
}

export function DeleteTasks({ onNavigate }: Props) {

  const [taskId, setTaskId] = useState<number | null>(null)

  const options = !taskId
    ? [
        ...getTasks().map(task => ({
          label: task.name_task,
          value: String(task.id)
        })),
        { label: "Volver al menú", value: "menu" }
      ]
    : [
        { label: "Sí, eliminar", value: "delete" },
        { label: "Cancelar", value: "cancel" }
      ]

  function handleSelect(value: string) {

    if (!taskId) {
      if (value === "menu") return onNavigate("menu")
      return setTaskId(Number(value))
    }

    if (value === "delete") {
      deleteTask(taskId)
    }

    onNavigate("view_tasks")
  }

  return (
    <Box
      flexDirection="column"
      borderStyle="round"
      borderColor="magenta"
      padding={1}
      width={55}
    >

      <Box justifyContent="center">
        <Text bold color="magentaBright">
          Eliminar tarea
        </Text>
      </Box>

      <Box justifyContent="center">
        <Text color={taskId ? "red" : "gray"}>
          {taskId
            ? "¿Confirmar eliminación?"
            : "Selecciona la tarea"}
        </Text>
      </Box>

      <Box
        marginTop={1}
        borderStyle="single"
        borderColor={taskId ? "red" : "gray"}
        padding={1}
      >
        <Select options={options} onChange={handleSelect} />
      </Box>

    </Box>
  )
}