import { Injectable } from '@angular/core';
import { Projects } from '../myprojects';
import { Project } from '../project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  private projects: Project[]= Projects;

  constructor() { }

  getProjects(): Project[]{
    return this.projects;
  }

  getProject(posicion:number): Project{
    return this.projects[posicion];
  }
}
