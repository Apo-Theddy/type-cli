import React from "react"
import { Text } from "ink"
import { Select } from "@inkjs/ui"
import { getTaskNames } from "../services/task.services.js"

const nameTask = getTaskNames()

function getOptions() {
    const options = nameTask.map((name, index) => ({
        label: name,
        value: `task - ${index + 1}`
    }))
    return options
}

const options = getOptions()

export function ViewTasks() {
  return (
    <>
      <Text>Todas las tareas</Text>
      <Select options = {options}/>
    </>
  )
}