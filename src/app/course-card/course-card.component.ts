import {
  Attribute,
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCardComponent implements OnInit {
  constructor(
    private readonly coursesService: CoursesService,
    @Attribute('type') private type: string
  ) {
    console.log('constructor');
  }

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();

  ngOnInit() {
    console.log('ngOnInit');
  }

  onTitleChanged(title: string) {
    this.course.description = title;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
