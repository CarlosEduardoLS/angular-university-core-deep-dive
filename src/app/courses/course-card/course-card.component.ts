import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Attribute,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { Course } from '../../model/course';
import { CoursesService } from '../courses.service';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    AfterContentChecked,
    AfterViewChecked,
    AfterContentInit,
    AfterViewInit,
    DoCheck
{
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

  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  ngOnChanges(changes: any): void {
    console.log('ngOnChanges', changes);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  onTitleChanged(title: string) {
    this.course.description = title;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
