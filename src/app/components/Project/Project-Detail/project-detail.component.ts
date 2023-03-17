import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectService } from '../project.service';

@Component({
	selector: 'app-project-detail',
	templateUrl: './project-detail.component.html',
	styleUrls: ['./project-detail.component.scss'],
})
export class ProjectDetailComponent implements OnInit {
	id: string = '';
	activeProject: any;
	taskCounter: number = 0;
	wipTaskCounter: number = 0;
	openedTaskCounter: number = 0;
	closedTaskCounter: number = 0;

	constructor(
		private route: ActivatedRoute,
		private projectService: ProjectService
	) {}

	ngOnInit() {
		// STORING ID PARAM FROM URL
		this.id = this.route.snapshot.params['id'];

		// FILTER ALL PROJECT FOR THE ID PARAMETER
		this.activeProject = this.projectService.projects.filter(
			(character: any) => {
				return character.id == this.id;
			}
		);

		this.taskCounter = this.activeProject[0].task.length;

		this.wipTaskCounter = this.activeProject[0].task.filter(
			(task: any) => task.stato == 'In Lavorazione'
		).length;

		this.openedTaskCounter = this.activeProject[0].task.filter(
			(task: any) => task.stato == 'Aperto'
		).length;

		this.closedTaskCounter = this.activeProject[0].task.filter(
			(task: any) => task.stato == 'Chiuso'
		).length;
	}

	// onOptionClick(e: any) {
	// 	console.log(e.srcElement.classList);

	// 	e.srcElement.classList.toggle('active');
	// }
}
