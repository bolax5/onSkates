import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MireiaComponent } from './mireia.component';

describe('MireiaComponent', () => {
  let component: MireiaComponent;
  let fixture: ComponentFixture<MireiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MireiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MireiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
