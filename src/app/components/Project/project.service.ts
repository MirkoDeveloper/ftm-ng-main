import { LocalhostJavaService } from "src/app/services/localhost-java.service";
import { Injectable } from "@angular/core";

@Injectable({
	providedIn: 'root',
})

export class ProjectService {
	projects = [
		{
			title: 'Abbecedario',
			acronym: 'ABC',
			projectLead: 'Giuseppe Sette',
			id: 1,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente aliquam quos enim eaque veniam odio saepe minima necessitatibus! Quo maxime ad pariatur, earum alias sunt commodi officiis officia assumenda?',
			other: '',
			type: 'sviluppo',
			date: '21 Aprile 2023',
			task: [
				{
					key: 'ABC',
					id: 1,
					title: 'Implementazione XYZ nel ABC',
					stato: 'In Lavorazione',
					tipologia: 'Task',
				},
				{
					key: 'ABC',
					id: 2,
					title: 'Implementazione ALTRO nel LIBRO',
					stato: 'In Lavorazione',
					tipologia: 'Task',
				},
				{
					key: 'ABC',
					id: 3,
					title: 'Implementazione LGT nel core asset',
					stato: 'In Lavorazione',
					tipologia: 'Task',
				},
				{
					key: 'ABC',
					id: 4,
					title: 'Lavorazione del core framework',
					stato: 'Chiuso',
					tipologia: 'Task',
				},
				{
					key: 'ABC',
					id: 5,
					title: 'Risoluzione bug nei pagamaneti',
					stato: 'Chiuso',
					tipologia: 'Task',
				},
				{
					key: 'ABC',
					id: 6,
					title: 'Implementazione del CSS',
					stato: 'Chiuso',
					tipologia: 'Task',
				},
			],
		},
		{
			title: 'Alfabeto',
			acronym: 'AFB',
			projectLead: 'Gianmarco Tocco',
			id: 2,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente aliquam quos enim eaque veniam odio saepe minima necessitatibus! Quo maxime ad pariatur, earum alias sunt commodi officiis officia assumenda?',
			other: '',
			type: 'design',
			date: '12 Giugno 2023',
			task: [
				{
					key: 'AFB',
					id: 1,
					title: 'Implementazione XYZ nel ABC',
					stato: 'In Lavorazione',
					tipologia: 'Task',
				},
				{
					key: 'AFB',
					id: 2,
					title: 'Implementazione ALTRO nel LIBRO',
					stato: 'In Lavorazione',
					tipologia: 'Task',
				},
				{
					key: 'AFB',
					id: 3,
					title: 'Implementazione LGT nel core asset',
					stato: 'In Lavorazione',
					tipologia: 'Task',
				},
				{
					key: 'AFB',
					id: 4,
					title: 'Lavorazione del core framework',
					stato: 'Chiuso',
					tipologia: 'Task',
				},
				{
					key: 'AFB',
					id: 5,
					title: 'Risoluzione bug nei pagamaneti',
					stato: 'Chiuso',
					tipologia: 'Task',
				},
				{
					key: 'AFB',
					id: 6,
					title: 'Implementazione del CSS',
					stato: 'Chiuso',
					tipologia: 'Task',
				},
			],
		},
		{
			title: 'Trenitialia',
			acronym: 'TRN',
			projectLead: 'Renato Conti',
			id: 3,
			description:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis sapiente aliquam quos enim eaque veniam odio saepe minima necessitatibus! Quo maxime ad pariatur, earum alias sunt commodi officiis officia assumenda?',
			other: '',
			type: 'backend',
			date: '30 Luglio 2023',
			task: [
				{
					key: 'TRN',
					id: 1,
					title: 'Implementazione XYZ nel ABC',
					stato: 'In Lavorazione',
					tipologia: 'Task',
				},
				{
					key: 'TRN',
					id: 2,
					title: 'Implementazione ALTRO nel LIBRO',
					stato: 'In Lavorazione',
					tipologia: 'Task',
				},
				{
					key: 'TRN',
					id: 3,
					title: 'Implementazione LGT nel core asset',
					stato: 'In Lavorazione',
					tipologia: 'Task',
				},
				{
					key: 'TRN',
					id: 4,
					title: 'Lavorazione del core framework',
					stato: 'Chiuso',
					tipologia: 'Task',
				},
				{
					key: 'TRN',
					id: 5,
					title: 'Risoluzione bug nei pagamaneti',
					stato: 'Chiuso',
					tipologia: 'Task',
				},
				{
					key: 'TRN',
					id: 6,
					title: 'Implementazione del CSS',
					stato: 'Chiuso',
					tipologia: 'Task',
				},
			],
		},
	];
	filter: any;

	constructor() {

	}
}
