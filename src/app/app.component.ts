import { Component, OnInit } from '@angular/core';
import { COURSES } from '../db-data';
import { CoursesService } from './courses/courses.service';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private readonly coursesService: CoursesService) {}

  courses: Course[] = COURSES;

  ngOnInit(): void {}

  onEditCourse() {}

  updateCourse(course: Course) {
    this.coursesService
      .updateCourse(course)
      .subscribe(() => console.log('Course Updated!'));
  }
}
