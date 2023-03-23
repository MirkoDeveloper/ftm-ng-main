import { Component, Input, OnInit } from '@angular/core';
import { LocalhostJavaService } from 'src/app/services/localhost-java.service';

@Component({
	selector: 'app-project-list-item',
	templateUrl: './project-list-item.component.html',
	styleUrls: [
		'./project-list-item.component.scss',
		// '../Project-List/project-list.component.scss',
	],
})
export class ProjectListItemComponent implements OnInit {
	@Input() item: any;

	constructor(private db: LocalhostJavaService) {}

	ngOnInit() {
		console.log(this.item);
	}

	editProject() {
		console.log('edit');
	}

	eliminateProject() {
		console.log('eliminate');
		console.log(this.item.id);

		this.db.eliminateProject(this.item.id).subscribe(data => console.log(data));
	}
}
