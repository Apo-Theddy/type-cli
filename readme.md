# Task CLI - Gestor de Tareas en Terminal

Aplicación CLI desarrollada con **Ink (React para terminal)** que permite gestionar tareas de forma interactiva desde la consola.

---

## Descripción

Este proyecto es un gestor de tareas que funciona completamente en la terminal. Permite realizar operaciones básicas como:

* Ver tareas
* Crear nuevas tareas
* Editar tareas existentes
* Eliminar tareas (eliminación lógica)
* Ver detalle de una tarea

La interfaz está construida con componentes reutilizables usando Ink, simulando una experiencia tipo aplicación pero dentro del CLI.

---

## Tecnologías utilizadas

* React
* Ink
* TypeScript
* pnpm

---

## Instalación

Clona el repositorio e instala dependencias:

```bash
pnpm install
```

---

## Scripts disponibles

### Build

Compila el proyecto (TypeScript → JavaScript):

```bash
pnpm build
```

---

### Start

Ejecuta la aplicación CLI:

```bash
pnpm start
```

---

## Funcionamiento

El sistema maneja las tareas mediante un flujo interactivo:

1. Se muestra un menú principal
2. El usuario navega con teclado
3. Selecciona opciones (crear, ver, editar, eliminar)
4. Cada vista es un componente independiente

---

## Estructura del proyecto

```bash
src/
├── components/
│   ├── Menu.tsx
│   ├── ViewTasks.tsx
│   ├── CreateTasks.tsx
│   ├── EditTasks.tsx
│   ├── DeleteTasks.tsx
│   └── DetailTasks.tsx
│
├── services/
│   └── task.services.ts
│
├── constants/
│   └── statusOptions.ts
│
└── app.tsx
```

---

## Nota

La eliminación de tareas es **lógica**, no física. Esto significa que:

* No se borran de la base de datos
* Solo se marcan como eliminadas

---

## Autor

Desarrollado como proyecto de práctica para entender:

* Arquitectura en CLI con React
* Manejo de estado en flujos interactivos
* Separación de responsabilidades

---

## Mejoras futuras

* Persistencia real con base de datos
* Filtros por estado
* Búsqueda de tareas
* Mejor manejo de errores

---

## Licencia

MIT
