import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { COURSES } from '../db-data';
import { CourseTitleComponent } from './course-title/course-title.component';
import { CoursesService } from './courses/courses.service';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private readonly coursesService: CoursesService,
    private readonly injector: Injector
  ) {}

  courses: Course[] = COURSES;

  coursesTotal = this.courses.length;

  ngOnInit(): void {
    const htmlElement = createCustomElement(CourseTitleComponent, {
      injector: this.injector,
    });

    customElements.define('course-title', htmlElement);
  }

  onEditCourse() {
    this.courses[1].category = 'ADVANCED';
  }

  updateCourse(course: Course) {
    this.coursesService
      .updateCourse(course)
      .subscribe(() => console.log('Course Updated!'));
  }
}
