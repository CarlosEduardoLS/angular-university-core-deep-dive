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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, DoCheck {
  constructor(
    private readonly coursesService: CoursesService,
    private readonly cd: ChangeDetectorRef
  ) {}

  courses: Course[];

  isLoading = false;

  ngOnInit(): void {
    this.coursesService.getCourses().subscribe((courses) => {
      this.courses = courses;
      this.isLoading = true;
    });
  }

  ngDoCheck(): void {
    console.log('DoCheck');
    if (this.isLoading) {
      this.cd.markForCheck();
      console.log('Called cd.markForCheck()');
      this.isLoading = false;
    }
  }

  onEditCourse() {}

  updateCourse(course: Course) {
    this.coursesService
      .updateCourse(course)
      .subscribe(() => console.log('Course Updated!'));
  }
}
