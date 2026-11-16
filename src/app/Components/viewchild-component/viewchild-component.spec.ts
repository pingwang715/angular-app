import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewchildComponent } from './viewchild-component';

describe('ViewchildComponent', () => {
  let component: ViewchildComponent;
  let fixture: ComponentFixture<ViewchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewchildComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ViewchildComponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
