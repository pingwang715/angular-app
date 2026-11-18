import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContentchildComponent } from './contentchild-component';

describe('ContentchildComponent', () => {
  let component: ContentchildComponent;
  let fixture: ComponentFixture<ContentchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContentchildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContentchildComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
