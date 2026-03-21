import React, { useState } from "react"
import { Text, Box } from "ink"
import { Select } from "@inkjs/ui"
import TextInput from "ink-text-input"
import { createTasks } from "../services/task.services.js"
import type { Route } from "../app.js"
import { statusOption } from "../constants/statusOptions.js"

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
    if (!task.name_task.trim() || !task.description.trim()) return
    createTasks({ ...task, status })
    onNavigate("menu")
  }

  const labels = {
    name: "Nombre de la tarea",
    description: "Descripción",
    status: "Estado"
  }

  return (
    <Box
      flexDirection="column"
      borderStyle="round"
      borderColor="magenta"
      padding={1}
      width={50}
    >

      <Box justifyContent="center">
        <Text bold color="magentaBright">
          Crear tarea
        </Text>
      </Box>

      <Box justifyContent="center">
        <Text color="gray">
          {labels[field]}
        </Text>
      </Box>

      <Box marginTop={1}>

        {field !== "status" ? (
          <TextInput
            value={task[field === "name" ? "name_task" : "description"]}
            onChange={(value) =>
              setTask({
                ...task,
                [field === "name" ? "name_task" : "description"]: value
              })
            }
            onSubmit={() =>
              setField(field === "name" ? "description" : "status")
            }
          />
        ) : (
          <Select
            options={statusOption}
            onChange={save}
          />
        )}

      </Box>

    </Box>
  )
}