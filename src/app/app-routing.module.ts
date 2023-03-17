import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjectDetailComponent } from './components/Project/Project-Detail/project-detail.component';
import { CalendarioComponent } from './pages/calendario/calendario.component';
import { HomeComponent } from './pages/home/home.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { ProgettiComponent } from './pages/progetti/progetti.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TaskComponent } from './pages/task/task.component';

const routes: Routes = [
	{ path: '', component: HomeComponent },
	{ path: 'progetti', component: ProgettiComponent },
	// { path: 'progetti/:id', component: ProjectDetailComponent },
	{ path: 'progetti/:id', component: ProjectDetailComponent },
	{ path: 'task', component: TaskComponent },
	{ path: 'calendario', component: CalendarioComponent },
	{ path: 'settings', component: SettingsComponent },
	{ path: '**', component: PageNotFoundComponent },
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
})
export class AppRoutingModule {}
