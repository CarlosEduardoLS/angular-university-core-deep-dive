import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
  OnInit,
} from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  constructor(private readonly coursesService: CoursesService) {}

  courses: Course[];

  ngOnInit(): void {
    this.coursesService
      .getCourses()
      .subscribe((courses) => (this.courses = courses));
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  onEditCourse() {}

  updateCourse(course: Course) {
    this.coursesService
      .updateCourse(course)
      .subscribe(() => console.log('Course Updated!'));
  }
}
