import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LawloginComponent } from './lawlogin.component';

describe('LawloginComponent', () => {
  let component: LawloginComponent;
  let fixture: ComponentFixture<LawloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LawloginComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LawloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
