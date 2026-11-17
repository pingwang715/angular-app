import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, ViewChildren, QueryList} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'app-viewchild-component',
  styleUrl: './viewchild-component.css',
  templateUrl: './viewchild-component.html',
})
export class ViewchildComponent {
  // @ViewChild('nameInput')

  // nameInput!: ElementRef<HTMLInputElement>;

  // // focusInput(): void {
  // //   console.log(this.nameInput);
  // //   console.log(this.nameInput.nativeElement);
  // //   this.nameInput.nativeElement.focus();
  // // }

  // ngAfterViewInit(): void {
  //   this.nameInput.nativeElement.focus();
  // }

  @ViewChildren("input")
  inputs!: QueryList<ElementRef<HTMLInputElement>>;

  clearInputs(): void {
    this.inputs.forEach(input => {
      input.nativeElement.value = ''
    });
  }
}
