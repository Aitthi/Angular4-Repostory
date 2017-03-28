import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReposformComponent } from './reposform.component';

describe('ReposformComponent', () => {
  let component: ReposformComponent;
  let fixture: ComponentFixture<ReposformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReposformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReposformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
