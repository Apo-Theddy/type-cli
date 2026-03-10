import React from "react"
import { Text } from "ink"
import { Select } from "@inkjs/ui"
import type { Route } from "../app.js"

type Props = {
  onNavigate: (route: Route) => void
}

export function Menu({ onNavigate }: Props) {
  const options = [
    { label: "Ver tareas", value: "view_tasks" },
    { label: "Crear tarea", value: "create_task" },
    { label: "Editar tareas", value: "edit_tasks" },
    { label: "Salir", value: "menu" }
  ]

  return (
    <>
      <Text>Selecciona una opción:</Text>
      <Select options={options} onChange={(value) => onNavigate(value as Route)} />
    </>
  )
}