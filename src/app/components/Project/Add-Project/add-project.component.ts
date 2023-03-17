import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LocalhostJavaService } from 'src/app/services/localhost-java.service';

@Component({
	selector: 'app-add-project',
	templateUrl: './add-project.component.html',
	styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
	constructor(private db: LocalhostJavaService) {}

	addProjectForm: FormGroup = new FormGroup({});

	tipologie: string[] = ['Software (SW)', 'Business (BS)'];

	capoprogetti: string[] = [
		'Giuseppe Sette',
		'Mario Rossi',
		'Luigi Verdi',
		'Annarita Dosi',
		'Gianmarco Tocco',
		'Luigi Bianchi',
	];

	ngOnInit() {
		this.addProjectForm = new FormGroup({
			projectName: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(20),
			]),
			projectAcronym: new FormControl('', [
				Validators.required,
				Validators.minLength(3),
				Validators.maxLength(3),
			]),
			projectLeader: new FormControl('', [Validators.required]),
			shortDescription: new FormControl('', [
				Validators.required,
				Validators.minLength(10),
			]),
			note: new FormControl(''),
			tipologia: new FormControl('', [Validators.required]),
			scadenza: new FormControl('', [Validators.required]),
		});
	}

	onSubmit() {
		console.log(this.addProjectForm);
		console.log(this.addProjectForm.value);

		// -> INSERT ON DB
		this.db.postProject({
			title: this.addProjectForm.value.projectName,
			acronym: this.addProjectForm.value.acronym,
			projectLead: this.addProjectForm.value.projectLeader.map(
				(i: any) => i
			),
			description: this.addProjectForm.value.shortDescription,
			other: this.addProjectForm.value.note,
			type: this.addProjectForm.value.tipologia,
			date: this.addProjectForm.value.scadenza,
		});

		this.addProjectForm.reset();
	}
}
