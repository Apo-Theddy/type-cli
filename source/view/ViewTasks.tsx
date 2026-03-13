import React from 'react';
import {Text} from 'ink';
import {Select} from '@inkjs/ui';
import {getTasks} from '../services/task.services.js';
import type {Route} from '../app.js';

type Props = {
	onSelectTask: (id: number) => void;
	onNavigate: (route: Route) => void;
};

export function ViewTasks({onSelectTask, onNavigate}: Props) {
	const tasks = getTasks();

	const options = tasks.map(task => ({
		label: task.name_task,
		value: String(task.id),
	}));

	options.push({
		label: 'Volver al menú',
		value: 'menu',
	});

	return (
		<>
			<Text>Todas las tareas</Text>

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
		</>
	);
}
