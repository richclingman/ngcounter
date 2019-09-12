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

  it('should have counters init as empty array', () => {
    expect(Array.isArray(component.counters)).toBeTruthy();
    expect(component.counters.length).toEqual(0);
  })



  it('should have a function to create a new counter', () => {
    component.createCounter();

    expect(component.counters.length).toEqual(1);
  })

  describe('UI Component',() =>{
    let element: HTMLElement;

    beforeEach(() => {
      fixture.detectChanges();
      element = fixture.elementRef.nativeElement;
    })

    it('should show a count of counters', () => {
      component.counters = [1,2,3,4,5];
      fixture.detectChanges();
  
      expect(element.querySelector('p').innerText).toEqual('5 Counters')
    })

    it('should add a counter when button is clicked',() => {
      element.querySelectorAll('button')[0].click();
      fixture.detectChanges();
      expect(component.counters.length).toEqual(1);

    })


  })
});
