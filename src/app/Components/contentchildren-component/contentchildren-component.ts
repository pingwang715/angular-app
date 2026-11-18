import { CommonModule } from '@angular/common';
import { Component, ContentChildren, QueryList, ElementRef } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-contentchildren-component',
  styleUrl: './contentchildren-component.css',
  templateUrl: './contentchildren-component.html',
})
export class ContentchildrenComponent {
  @ContentChildren('course') courses!: QueryList<ElementRef<HTMLParagraphElement>>;

  courseCount = 0;

  showCourseCount(): void {
    this.courseCount = this.courses.length;
  }
}
