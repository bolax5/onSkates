import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiriamComponent } from './miriam.component';

describe('MiriamComponent', () => {
  let component: MiriamComponent;
  let fixture: ComponentFixture<MiriamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiriamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiriamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
