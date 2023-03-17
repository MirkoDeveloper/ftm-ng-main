import { Component, OnInit } from '@angular/core';
import { LocalhostJavaService } from 'src/app/services/localhost-java.service';
import { ProjectService } from '../project.service';

@Component({
	selector: 'app-project-list',
	templateUrl: './project-list.component.html',
	styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent implements OnInit {
	projects: any;
	constructor(private http: LocalhostJavaService) {}

	ngOnInit(): void {
		this.http.getProjects().subscribe(data => {
			this.projects = data;
			console.log(data);
			console.log(this.projects)
		})
	}
}
