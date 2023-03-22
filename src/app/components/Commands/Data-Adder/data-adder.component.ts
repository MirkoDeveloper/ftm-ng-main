import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NavbarComponent } from '../../Navbar/navbar.component';
import { MainbarComponent } from '../../Mainbar/mainbar.component';
import { AddProjectComponent } from '../../Project/Add-Project/add-project.component';
import { AddTaskComponent } from '../../Task/Add-Task/add-task.component';

@Component({
	selector: 'app-data-adder',
	templateUrl: './data-adder.component.html',
	styleUrls: ['./data-adder.component.scss'],
})
export class DataAdderComponent implements OnInit {
	currentUrl: string = '';
	urlContainsProgetti: boolean = false;
	urlContainsTask: boolean = false;

	constructor(private location: Location, private matDialog: MatDialog) {}

	ngOnInit(): void {
		this.currentUrl = this.location.path();
		this.urlContainsProgetti = this.currentUrl.includes('progetti');
		this.urlContainsTask = this.currentUrl.includes('task');
		console.log(this.urlContainsTask); // logs the current URL
	}

	openModal() {
		switch (true) {
			case this.urlContainsProgetti:
				this.matDialog.open(AddProjectComponent, {
					minWidth: '60vh',
				});
				break;

			case this.urlContainsTask:
				this.matDialog.open(AddTaskComponent, {
					minWidth: '60vh',
				});
				break;

			default:
				this.matDialog.open(MainbarComponent);
				break;
		}
	}
}
