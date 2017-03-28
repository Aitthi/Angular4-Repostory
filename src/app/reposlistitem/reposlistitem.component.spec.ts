import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposlistitemComponent } from './reposlistitem.component';

describe('ReposlistitemComponent', () => {
  let component: ReposlistitemComponent;
  let fixture: ComponentFixture<ReposlistitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposlistitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposlistitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
