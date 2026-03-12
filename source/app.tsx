import React, { useState } from "react"
import { Menu } from "./view/MenuView.js"
import { ViewTasks } from "./view/ViewTasks.js"
import { DetailTasks } from "./view/DetailsTasks.js"
import { CreateTasks } from "./view/CreateTasks.js"

export type Route = "menu" | "view_tasks" | "detail_tasks" | "create_tasks"

export function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>("menu")
  const [selectedTaskId, setSelectedTaskId] = useState<number | null>(null)

  function navigate(route: Route) {
    setCurrentRoute(route)
  }

  function openTaskDetail(id: number) {
    setSelectedTaskId(id)
    setCurrentRoute("detail_tasks")
  }

  const routes: Record<Route, React.ReactNode> = {
    menu: <Menu onNavigate={navigate} />,

    view_tasks: (
      <ViewTasks
        onSelectTask={openTaskDetail}
      />
    ),

    detail_tasks: (
      <DetailTasks
        taskId={selectedTaskId}
        onNavigate={navigate}
      />
    ),

    create_tasks: (
      <CreateTasks onNavigate={navigate}/>
    )

  }

  return routes[currentRoute] ?? <Menu onNavigate={navigate} />
}