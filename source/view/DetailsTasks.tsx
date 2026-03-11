import React from "react"
import { Text } from "ink"
import type { Route } from "../app.js"
import { getDescriptionTask } from "../services/task.services.js"

type Props = {
  taskId: number | null
  onNavigate: (route: Route) => void
}

export function DetailTasks({ taskId }: Props) {
  const taskDescription = getDescriptionTask(taskId!)

  return (
    <>
      <Text>Detalle de tarea</Text>
      <Text>ID seleccionado: {taskId}</Text>
      <Text>Nombre: {taskDescription.name_task}</Text>
      <Text>Descripcion: {taskDescription.description}</Text>
      <Text>Status: {taskDescription.status}</Text>
    </>
  )
}