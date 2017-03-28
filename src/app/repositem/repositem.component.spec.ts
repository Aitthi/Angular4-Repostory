import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepositemComponent } from './repositem.component';

describe('RepositemComponent', () => {
  let component: RepositemComponent;
  let fixture: ComponentFixture<RepositemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepositemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepositemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
