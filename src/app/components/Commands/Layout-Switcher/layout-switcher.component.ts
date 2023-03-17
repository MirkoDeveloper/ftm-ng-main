import { Component } from '@angular/core';

@Component({
	selector: 'app-layout-switcher',
	templateUrl: './layout-switcher.component.html',
	styleUrls: ['./layout-switcher.component.scss'],
})
export class LayoutSwitcherComponent {
	gridLayout: number = 1;

	setGridLayout(e: number) {
		this.gridLayout = e;
	}
}
