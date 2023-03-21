import { Component, OnInit } from '@angular/core';
import { LocalhostJavaService } from 'src/app/services/localhost-java.service';

@Component({
	selector: 'app-task-list',
	templateUrl: './task-list.component.html',
	styleUrls: ['./task-list.component.scss'],
})
export class TaskListComponent implements OnInit {
	tasks: any;

	constructor(private http: LocalhostJavaService) {}

	ngOnInit(): void {
		this.http.getTask().subscribe((data) => {
			this.tasks = data;
			console.log(data);
			console.log(this.tasks);
		});
	}
}
