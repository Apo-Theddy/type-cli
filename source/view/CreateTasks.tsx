import React, { useState } from "react"
import { Text, Box } from "ink"
import { Select } from "@inkjs/ui"
import TextInput from "ink-text-input"
import { createTasks } from "../services/task.services.js"
import type { Route } from "../app.js"

type Props = {
  onNavigate: (route: Route) => void
}

export function CreateTasks({ onNavigate }: Props) {

  const [field, setField] = useState<"name" | "description" | "status">("name")
  const [task, setTask] = useState({
    name_task: "",
    description: ""
  })

  function save(status: string) {
    createTasks({ ...task, status })
    onNavigate("menu")
  }

  const statusOptions = [
        { label: "Pendiente", value: "pending" },
        { label: "En progreso", value: "progress" },
        { label: "Completado", value: "done" }
    ]

  return (
    <Box flexDirection="column">

      {field === "name" && (
        <>
          <Text>Nombre de la tarea:</Text>
          <TextInput
            value={task.name_task}
            onChange={(value) => setTask({ ...task, name_task: value })}
            onSubmit={() => setField("description")}
          />
        </>
      )}

      {field === "description" && (
        <>
          <Text>Descripción:</Text>
          <TextInput
            value={task.description}
            onChange={(value) => setTask({ ...task, description: value })}
            onSubmit={() => setField("status")}
          />
        </>
      )}

      {field === "status" && (
        <>
          <Text>Estado:</Text>
          <Select
            options={statusOptions}
            onChange={save}
          />
        </>
      )}

    </Box>
  )
}