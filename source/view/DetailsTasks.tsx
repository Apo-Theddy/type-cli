import React from "react"
import { Text } from "ink"
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
const salir=[
  { label: "Editar", value: "edit_tasks" }, 
  { label: "Regresar", value: "back_tasks" }
]

export function DetailTasks({ taskId, onNavigate }: Props) {
  const task = getTaskById(taskId!)

 function handleOption(value: string) {
  if (value === "edit_tasks") {
    onNavigate("edit_tasks")
  }
  if (value === "back_tasks") {
    onNavigate("view_tasks")
  }
  }

  return (
    <>
      <Text>Detalle de tarea</Text>
      <Text>ID seleccionado: {taskId}</Text>
      <Text>Nombre: {task.name_task}</Text>
      <Text> Descripcion: {task.description}</Text>
      <Text>Status: {statusLabels[task.status]}</Text>
      <Select options={salir} onChange = {handleOption}/>
    </>
  )
}