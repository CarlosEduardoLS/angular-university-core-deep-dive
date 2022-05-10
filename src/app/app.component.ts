import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { AppConfig, APP_CONFIG, CONFIG_TOKEN } from './config';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private readonly coursesService: CoursesService) {}

  courses$: Observable<Course[]>;

  ngOnInit(): void {
    this.courses$ = this.coursesService.getCourses();
  }

  updateCourse(course: Course) {
    this.coursesService
      .updateCourse(course)
      .subscribe(() => console.log('Course Updated!'));
  }
}
