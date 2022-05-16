import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { CoursesModule } from './courses/courses.module';
import { CourseTitleComponent } from './course-title/course-title.component';

@NgModule({
  declarations: [AppComponent, CourseTitleComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CoursesModule,
  ],
  exports: [CourseTitleComponent],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [CourseTitleComponent],
})
export class AppModule {}
