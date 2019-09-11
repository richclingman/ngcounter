import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterListComponent } from './counter-list.component';

describe('CounterListComponent', () => {
  let component: CounterListComponent;
  let fixture: ComponentFixture<CounterListComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CounterListComponent);
    component = fixture.componentInstance;
    element = fixture.elementRef.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show a count of counters', () => {
    // SEAT
    component.counters = [1,2,3,4,5];
    fixture.detectChanges();

    expect(element.querySelector('p').innerText).toEqual('5 Counters')
  })
});
