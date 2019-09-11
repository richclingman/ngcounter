import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterDetailComponentComponent } from './counter-detail-component.component';

describe('CounterDetailComponentComponent', () => {
  let component: CounterDetailComponentComponent;
  let fixture: ComponentFixture<CounterDetailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterDetailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterDetailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize at zero', () => {
    expect(component.value).toEqual(0);
  });

  it('should increment on click UP',() => {
    component.increment();
    expect(component.value).toEqual(1);

    component.increment();
    expect(component.value).toEqual(2);
  })

});
