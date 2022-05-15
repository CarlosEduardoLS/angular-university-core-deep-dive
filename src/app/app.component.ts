import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { COURSES } from '../db-data';
import { CoursesService } from '../services/courses.service';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private readonly coursesService: CoursesService) {}

  courses = COURSES;

  ngOnInit(): void {}

  onEditCourse() {
    // Didn't work becouse OnPush change detection
    // this.courses[0].description = 'new value!';

    const course = this.courses[0];

    const newCourse = { ...course, description: 'New Value' };

    this.courses[0] = newCourse;
  }

  updateCourse(course: Course) {
    this.coursesService
      .updateCourse(course)
      .subscribe(() => console.log('Course Updated!'));
  }
}
