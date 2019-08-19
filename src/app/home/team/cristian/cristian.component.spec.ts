import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CristianComponent } from './cristian.component';

describe('CristianComponent', () => {
  let component: CristianComponent;
  let fixture: ComponentFixture<CristianComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CristianComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CristianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
