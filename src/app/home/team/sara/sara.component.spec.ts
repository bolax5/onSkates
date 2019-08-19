import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaraComponent } from './sara.component';

describe('SaraComponent', () => {
  let component: SaraComponent;
  let fixture: ComponentFixture<SaraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
