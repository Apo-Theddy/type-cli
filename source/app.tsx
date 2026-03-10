import React, { useState } from "react"
import { Menu } from "./components/menu.js"
import { ViewTasks } from "./components/view-task.js"

// Rutas principales
export type Route = "menu" | "view_tasks"

export function App() {
  const [currentRoute, setCurrentRoute] = useState<Route>("menu")

  // Función para cambiar pantalla
  function navigate(route: Route) {
    setCurrentRoute(route)
  }

  // Mapa de rutas
  const routes: Record<Route, React.ReactNode> = {
    menu: <Menu onNavigate={navigate} />,
    view_tasks: <ViewTasks/>,
  }

  return routes[currentRoute] ?? <Menu onNavigate={navigate} />
}