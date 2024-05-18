import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttroneysComponent } from './attroneys.component';

describe('AttroneysComponent', () => {
  let component: AttroneysComponent;
  let fixture: ComponentFixture<AttroneysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AttroneysComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AttroneysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
