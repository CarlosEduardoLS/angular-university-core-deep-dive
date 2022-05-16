import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseCardComponent } from './course-card/course-card.component';
import { CourseImageComponent } from './course-image/course-image.component';
import { CoursesService } from './courses.service';
import { HighlightedDirective } from './directives/highlighted.directive';
import { NgxUnlessDirective } from './directives/ngx-unless.directive';
import { FilterByCategoryPipe } from './filter-by-category.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
    FilterByCategoryPipe,
  ],
  providers: [CoursesService],
  exports: [CourseCardComponent, CourseImageComponent, FilterByCategoryPipe],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CoursesModule {}
