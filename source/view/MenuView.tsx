import React from 'react';
import {Box, Text} from 'ink';
import {Select} from '@inkjs/ui';
import type {Route} from '../app.js';

type Props = {
	onNavigate: (route: Route) => void;
};

export function Menu({onNavigate}: Props) {
	const menuOptions = [
		{label: 'Ver tareas', value: 'view_tasks'},
		{label: 'Crear tareas', value: 'create_tasks'},
		{label: 'Eliminar tareas', value: 'delete_tasks'},
		{label: 'Salir', value: 'menu'},
	];

	return (
		<Box
			flexDirection="column"
			borderStyle="round"
			borderColor="magenta"
			padding={1}
			width={40}
		>
			<Box justifyContent="center">
				<Text bold color="magentaBright">
					MENU
				</Text>
			</Box>

			<Box justifyContent="center">
				<Text color="gray">Selecciona una opción</Text>
			</Box>

			<Box marginTop={1}>
				<Select
					options={menuOptions}
					onChange={value => onNavigate(value as Route)}
				/>
			</Box>
		</Box>
	);
}
