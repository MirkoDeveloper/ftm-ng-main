import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalhostJavaService } from 'src/app/services/localhost-java.service';

@Component({
	selector: 'app-add-task',
	templateUrl: './add-task.component.html',
	styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
	constructor(private db: LocalhostJavaService) {}

	addTaskForm: FormGroup = new FormGroup({});

	progetti: any = ['abbecedario', 'trenitalia', 'babylon'];
	tipologie: any = ['Attività', 'Anomalia', 'Criticità'];
	priorities: any = [
		'Molto Bassa',
		'Bassa',
		'Normale',
		'Bloccante',
		'Critica',
		'Alta',
	];
	assignees: any = [
		'Giuseppe Sette',
		'Mario Rossi',
		'Luigi Verdi',
		'Annarita Dosi',
		'Gianmarco Tocco',
		'Luigi Bianchi',
	];

	ngOnInit() {
		// ASSIGN STARTER VALUES
		this.db.getProjects().subscribe((data) => {
			this.progetti = data;
			console.log(this.progetti);
		});

		// FORM CONTROLLER
		this.addTaskForm = new FormGroup({
			taskName: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(20),
			]),
			project: new FormControl('', [Validators.required]),
			type: new FormControl('', [Validators.required]),
			priority: new FormControl('', [Validators.required]),
			taskDescription: new FormControl(''),
			assignee: new FormControl('', [Validators.required]),
			scadenza: new FormControl('', [Validators.required]),
		});
	}

	onSubmit() {
		console.log(this.addTaskForm);
		console.log(this.addTaskForm.value);

		// -> INSERT ON DB
		this.db;
		// .postProject({
		// 	title: this.addTaskForm.value.projectName,
		// 	acronym: this.addTaskForm.value.acronym,
		// 	projectLead: this.addTaskForm.value.projectLeader.map(
		// 		(i: any) => i
		// 	),
		// 	description: this.addTaskForm.value.shortDescription,
		// 	other: this.addTaskForm.value.note,
		// 	type: this.addTaskForm.value.tipologia,
		// 	date: this.addTaskForm.value.scadenza,
		// })
		// .subscribe((data) => {
		// 	console.log(data);
		// });

		this.addTaskForm.reset();
	}
}
