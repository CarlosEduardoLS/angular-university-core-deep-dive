import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Self,
} from '@angular/core';
import { CoursesService } from '../../services/courses.service';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  providers: [CoursesService],
})
export class CourseCardComponent implements OnInit {
  constructor(@Self() private readonly coursesService: CoursesService) {}

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
