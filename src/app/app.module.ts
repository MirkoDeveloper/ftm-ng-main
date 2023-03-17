import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/Navbar/navbar.component';
import { SearchbarComponent } from './components/Mainbar/Searchbar/searchbar.component';
import { MainbarComponent } from './components/Mainbar/mainbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ProgettiComponent } from './pages/progetti/progetti.component';
import { TaskComponent } from './pages/task/task.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProjectListComponent } from './components/Project/Project-List/project-list.component';
import { ProjectListItemComponent } from './components/Project/Project-List-Item/project-list-item.component';
import { ProjectService } from './components/Project/project.service';
import { ProjectDetailComponent } from './components/Project/Project-Detail/project-detail.component';
import { TaskItemComponent } from './components/Task/Task-Item/task-item.component';
import { CommandsComponent } from './components/Commands/commands.component';
import { LayoutSwitcherComponent } from './components/Commands/Layout-Switcher/layout-switcher.component';
import { AddProjectComponent } from './components/Project/Add-Project/add-project.component';
import { DataAdderComponent } from './components/Commands/Data-Adder/data-adder.component';

@NgModule({
	declarations: [
		AppComponent,
		NavbarComponent,
		SearchbarComponent,
		MainbarComponent,
		HomeComponent,
		ProgettiComponent,
		TaskComponent,
		CalendarioComponent,
		SettingsComponent,
		PageNotFoundComponent,
		ProjectListComponent,
		ProjectListItemComponent,
		ProjectDetailComponent,
		TaskItemComponent,
		CommandsComponent,
		LayoutSwitcherComponent,
		AddProjectComponent,
		DataAdderComponent,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		NgbModule,
		ReactiveFormsModule,
		BrowserAnimationsModule,
		MatIconModule,
		MatChipsModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatSelectModule,
	],
	providers: [ProjectService],
	bootstrap: [AppComponent],
})
export class AppModule {}
