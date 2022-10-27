import { Component, OnInit } from '@angular/core';
import { Course } from '../course';
import { CourseService } from '../services/course.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  mycourses: Course[] =[];
  constructor(public courseService: CourseService) { }
  ngOnInit(): void {
    this.mycourses= this.courseService.getProjects();
    console.log(this.mycourses);
  }

}
