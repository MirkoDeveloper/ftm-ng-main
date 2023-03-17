import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-add-project',
	templateUrl: './add-project.component.html',
	styleUrls: ['./add-project.component.scss'],
})
export class AddProjectComponent implements OnInit {
	toppings = new FormControl('');
	toppingList: string[] = [
		'opzione 1',
		'opzione 12',
		'opzione 13',
		'opzione 14',
		'opzione 15',
		'opzione 16',
	];

	addProjectForm: FormGroup = new FormGroup({});

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
		});

		console.log(this.addProjectForm.value);
	}

	onSubmit() {
		console.log(this.addProjectForm.value);
	}
}
