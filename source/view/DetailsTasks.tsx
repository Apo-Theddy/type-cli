import React from "react"
import { Text, Box } from "ink"
import { Select } from "@inkjs/ui"
import { getTaskById } from "../services/task.services.js"
import type { Route } from "../app.js"

type Props = {
  taskId: number | null
  onNavigate: (route: Route) => void
}

const statusLabels: Record<string, string> = {
  pending: "Pendiente",
  progress: "En progreso",
  done: "Completado"
}

const options = [
  { label: "Editar", value: "edit_tasks" },
  { label: "Regresar", value: "back_tasks" }
]

export function DetailTasks({ taskId, onNavigate }: Props) {

  const task = getTaskById(taskId!)

  if (!task) {
    return <Text color="red">Tarea no encontrada</Text>
  }

  function handleOption(value: string) {
    if (value === "edit_tasks") return onNavigate("edit_tasks")
    if (value === "back_tasks") return onNavigate("view_tasks")
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
          Detalle de tarea
        </Text>
      </Box>

      <Box
        flexDirection="column"
        borderStyle="single"
        borderColor="gray"
        padding={1}
        marginTop={1}
      >
        <Text>ID: {taskId}</Text>
        <Text>Nombre: {task.name_task}</Text>
        <Text>Descripción: {task.description}</Text>
        <Text>
          Estado: {statusLabels[task.status]}
        </Text>
      </Box>

      <Box marginTop={1}>
        <Text color="gray">Acciones</Text>
      </Box>

      <Box
        borderStyle="single"
        borderColor="magenta"
        padding={1}
      >
        <Select options={options} onChange={handleOption} />
      </Box>

    </Box>
  )
}