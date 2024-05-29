import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtroComponent } from './atro.component';

describe('AtroComponent', () => {
  let component: AtroComponent;
  let fixture: ComponentFixture<AtroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtroComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AtroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
