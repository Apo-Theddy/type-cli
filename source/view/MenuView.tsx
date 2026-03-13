import React from "react"
import { Text } from "ink"
import { Select } from "@inkjs/ui"
import type { Route } from "../app.js"

type Props = {
  onNavigate: (route: Route) => void
}

export function Menu({ onNavigate }: Props) {

  const menuOptions = [
    { label: "Ver tareas", value: "view_tasks" },
    { label: "Crear tareas", value: "create_tasks" },
    { label: "Eliminar tareas", value: "delete_tasks"},
    { label: "Salir", value: "menu" }
  ]
  return (
    <>
      <Text>Menu</Text>
      <Select
        options={menuOptions}
        onChange={(value) => onNavigate(value as Route)}
      />
    </>
  )
}