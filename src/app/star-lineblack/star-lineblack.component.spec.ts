import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StarLineblackComponent } from './star-lineblack.component';

describe('StarLineblackComponent', () => {
  let component: StarLineblackComponent;
  let fixture: ComponentFixture<StarLineblackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StarLineblackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StarLineblackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
