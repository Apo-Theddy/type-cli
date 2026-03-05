import React, { useEffect, useState } from 'react';
import {Box, Text} from 'ink';
import { CLI } from './constants/cli.js';
import {TextInput} from '@inkjs/ui';
import {getUserNames} from './services/db.js';

export function App() {
	return (
		<Text>
			Hello, <Text color="magenta" backgroundColor={"black"}>{CLI.nameTerminal!}</Text>
		</Text>
	);
}

export function Test(){
	const [value,setValue] = useState('');
	//Como en la parte superior se crea una variable de estado y se usa useState para inicializarla con un string vacio
	// y los <string[]>([] son para indicar que el tipo de dato va a almacenar un array de string
	const [sugentions, setSugestions] = useState<string[]>([]);
	//Cuando el  componente se monte por primera vez trae los datos de la db
	useEffect (() => {
		const names = getUserNames();
		setSugestions(names);
	}, [])
	
	return (
		<Box flexDirection="column" gap={1}>
			<TextInput placeholder="Start typing..." 
			suggestions={sugentions} 
			onChange={setValue} />
			<Text>input value: "{value}"</Text>
		</Box>
	);
}