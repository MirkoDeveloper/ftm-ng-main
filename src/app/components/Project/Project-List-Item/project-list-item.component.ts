import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-project-list-item',
	templateUrl: './project-list-item.component.html',
	styleUrls: [
		'./project-list-item.component.scss',
		// '../Project-List/project-list.component.scss',
	],
})
export class ProjectListItemComponent {
	@Input() item: any;
}
