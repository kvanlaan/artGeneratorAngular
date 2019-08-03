import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomimagesdialogComponent } from './customimagesdialog.component';

describe('CustomimagesdialogComponent', () => {
  let component: CustomimagesdialogComponent;
  let fixture: ComponentFixture<CustomimagesdialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomimagesdialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomimagesdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
