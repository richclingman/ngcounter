import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterListComponent } from './counter-list.component';
import { AppComponent } from '../app.component';
import { CounterDetailComponentComponent } from '../counter-detail-component/counter-detail-component.component';

describe('CounterListComponent', () => {
  let component: CounterListComponent;
  let fixture: ComponentFixture<CounterListComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CounterListComponent, CounterDetailComponentComponent ]
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

  it('should create "super" from 5 non-super', () => {
    component.createCounter();
    component.createCounter();
    component.createCounter();
    component.createCounter();
    component.createCounter();
    component.createCounter();

    expect(component.counters.length).toEqual(1);
    expect(component.counters[0].isSuper).toEqual(true);  
  })

  it('should sum counters into super', () => {
    component.counters.push({value:1, isSuper: false});
    component.counters.push({value:2, isSuper: false});
    component.counters.push({value:3, isSuper: false});
    component.counters.push({value:4, isSuper: false});
    component.counters.push({value:5, isSuper: false});
    component.createCounter();

    expect(component.counters.length).toEqual(1);
    expect(component.counters[0].value).toEqual(15);  
  })

  it('should sum non-supers into super', () => {
    component.counters.push({value:1, isSuper: true});
    component.counters.push({value:3, isSuper: true});
    component.counters.push({value:2, isSuper: false});
    component.counters.push({value:4, isSuper: false});
    component.counters.push({value:5, isSuper: false});
    component.counters.push({value:5, isSuper: false});
    component.counters.push({value:5, isSuper: false});
    component.createCounter();

    expect(component.counters.length).toEqual(3);
    expect(component.counters[2].value).toEqual(21);  
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
