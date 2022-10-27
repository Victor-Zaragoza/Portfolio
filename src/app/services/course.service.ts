import { Injectable } from '@angular/core';
import { Course } from '../course';
import {Courses} from '../mycourses'

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private courses: Course[]= Courses; 
  constructor() { }

  getProjects(): Course[]{
    return this.courses;
  }

}
