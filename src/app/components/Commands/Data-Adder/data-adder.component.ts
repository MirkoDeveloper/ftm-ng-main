import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { NavbarComponent } from '../../Navbar/navbar.component';
import { MainbarComponent } from '../../Mainbar/mainbar.component';
import { AddProjectComponent } from '../../Project/Add-Project/add-project.component';

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
		console.log(this.urlContainsProgetti); // logs the current URL
	}

	openModal() {
		switch (true) {
			case this.urlContainsProgetti:
				this.matDialog.open(AddProjectComponent);
				break;

			case this.urlContainsProgetti:
				this.matDialog.open(MainbarComponent);
				break;

			default:
				this.matDialog.open(MainbarComponent);
				break;
		}
	}
}
