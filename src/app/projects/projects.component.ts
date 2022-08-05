import { Component, OnInit } from '@angular/core';
import { Project } from '../project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  myprojects: Project[]=[];

  constructor(public projectservice:ProjectService) { }

  ngOnInit(): void {
    this.myprojects= this.projectservice.getProjects();
    console.log(this.myprojects)
  }
}
