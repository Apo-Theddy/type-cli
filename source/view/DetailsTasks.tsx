import React from "react"
import { Text } from "ink"
import { Select } from "@inkjs/ui"
import type { Route } from "../app.js"
import { getDescriptionTask } from "../services/task.services.js"

type Props = {
  taskId: number | null
  onNavigate: (route: Route) => void
}

const statusLabels: Record<string, string> = {
  pending: "Pendiente",
  progress: "En progreso",
  done: "Completado"
}
const salir=[{ label: "Salir", value: "exit" }]

export function DetailTasks({ taskId, onNavigate }: Props) {
  const taskDescription = getDescriptionTask(taskId!)

  function exit() {
    onNavigate("view_tasks")
  } 

  return (
    <>
      <Text>Detalle de tarea</Text>
      <Text>ID seleccionado: {taskId}</Text>
      <Text>Nombre: {taskDescription.name_task}</Text>
      <Text>Descripcion: {taskDescription.description}</Text>
      <Text>Status: {statusLabels[taskDescription.status]}</Text>
      <Select options={salir} onChange = {exit}/>
    </>
  )
}