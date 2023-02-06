import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ContactmeComponent } from './contactme/contactme.component';
import { ProjectsComponent } from './projects/projects.component';
import { OneProjectComponent } from './one-project/one-project.component';
import { CoursesComponent } from './courses/courses.component';
import { MachinesComponent } from './machines/machines.component';
import { OneMachineComponent } from './one-machine/one-machine.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ContactmeComponent,
    ProjectsComponent,
    OneProjectComponent,
    CoursesComponent,
    MachinesComponent,
    OneMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
