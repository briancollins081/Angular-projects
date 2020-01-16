import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NorecipeComponent } from './norecipe.component';

describe('NorecipeComponent', () => {
  let component: NorecipeComponent;
  let fixture: ComponentFixture<NorecipeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NorecipeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NorecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
