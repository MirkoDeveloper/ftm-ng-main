import { Component, Input, OnInit } from '@angular/core';

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

	ngOnInit() {
		console.log(this.item);
	}
}
