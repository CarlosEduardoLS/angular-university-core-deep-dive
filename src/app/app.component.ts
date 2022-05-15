import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CoursesService } from '../services/courses.service';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  constructor(private readonly coursesService: CoursesService) {}

  courses$: Observable<Course[]>;

  ngOnInit(): void {
    this.courses$ = this.coursesService.getCourses();
  }

  onEditCourse() {}

  updateCourse(course: Course) {
    this.coursesService
      .updateCourse(course)
      .subscribe(() => console.log('Course Updated!'));
  }
}
