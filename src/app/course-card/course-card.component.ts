import {
  Component,
  EventEmitter,
  Inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  constructor(private readonly coursesService: CoursesService) {
    console.log('Course Service Card -> ', this.coursesService.id);
  }

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  ngOnInit() {}

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
