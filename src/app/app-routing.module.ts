import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactmeComponent } from './contactme/contactme.component';
import { HomeComponent } from './home/home.component';
import { OneProjectComponent } from './one-project/one-project.component';
import { ProjectsComponent } from './projects/projects.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'contactme', component: ContactmeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'project/:id', component: OneProjectComponent},
  {path: '', component: HomeComponent},
  {path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
