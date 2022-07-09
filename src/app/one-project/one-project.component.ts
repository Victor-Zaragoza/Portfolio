import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from '../project';
import { ProjectService } from '../services/project.service';

@Component({
  selector: 'app-one-project',
  templateUrl: './one-project.component.html',
  styleUrls: ['./one-project.component.css']
})
export class OneProjectComponent implements OnInit {
  
  @Input() project!: Project;

  constructor(public projectservice:ProjectService, public activedroute:ActivatedRoute) {
    this.activedroute.params.subscribe(params =>{
      this.project= projectservice.getProject(params['id']);
    });
   }

  ngOnInit(): void {
  }

}
