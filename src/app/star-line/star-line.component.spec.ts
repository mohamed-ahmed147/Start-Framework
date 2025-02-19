import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarLineComponent } from './star-line.component';

describe('StarLineComponent', () => {
  let component: StarLineComponent;
  let fixture: ComponentFixture<StarLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarLineComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
