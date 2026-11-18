import { CommonModule } from '@angular/common';
import { AfterContentInit, Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-contentchild-component',
  styleUrl: './contentchild-component.css',
  templateUrl: './contentchild-component.html',
})
export class ContentchildComponent implements AfterContentInit {
  @ContentChild('title') title!: ElementRef<HTMLHeadingElement>;

  ngAfterContentInit(): void {
    console.log(this.title.nativeElement.textContent);
  }

}
