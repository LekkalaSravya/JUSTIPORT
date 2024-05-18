import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawhomeComponent } from './lawhome.component';

describe('LawhomeComponent', () => {
  let component: LawhomeComponent;
  let fixture: ComponentFixture<LawhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LawhomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LawhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
