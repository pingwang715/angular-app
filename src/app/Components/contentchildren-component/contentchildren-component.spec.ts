import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentchildrenComponent } from './contentchildren-component';

describe('ContentchildrenComponent', () => {
  let component: ContentchildrenComponent;
  let fixture: ComponentFixture<ContentchildrenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentchildrenComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentchildrenComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
