import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-task-list-item',
	templateUrl: './task-list-item.component.html',
	styleUrls: ['./task-list-item.component.scss'],
})
export class TaskListItemComponent {
	@Input() item: any;
}
