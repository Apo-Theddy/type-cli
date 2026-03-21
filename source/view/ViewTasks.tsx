import React from 'react';
import {Text, Box} from 'ink';
import {Select} from '@inkjs/ui';
import {getTasks} from '../services/task.services.js';
import type {Route} from '../app.js';

type Props = {
	onSelectTask: (id: number) => void;
	onNavigate: (route: Route) => void;
};

export function ViewTasks({onSelectTask, onNavigate}: Props) {
	const tasks = getTasks();

	const options = [
		...tasks.map(task => ({
			label: task.name_task,
			value: String(task.id),
		})),
		{label: 'Volver al menú', value: 'menu'},
	];

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
					Todas las tareas
				</Text>
			</Box>

			<Box justifyContent="center">
				<Text color="gray">
					Selecciona una tarea
				</Text>
			</Box>

			<Box marginTop={1}>
				<Select
					options={options}
					onChange={value => {
						if (value === 'menu') {
							onNavigate('menu');
						} else {
							onSelectTask(Number(value));
						}
					}}
				/>
			</Box>

		</Box>
	);
}