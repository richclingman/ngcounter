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
    expect(component.counter.value).toEqual(0);
  });

  it('should increment on click UP',() => {
    component.increment();
    expect(component.counter.value).toEqual(1);

    component.increment();
    expect(component.counter.value).toEqual(2);
  });

  it('should NOT decrement below zero on click DOWN', () => {
    component.decrement();
    expect(component.counter.value).toEqual(0);
  })

  it('should decrement on click DOWN', () => {
    component.counter.value = 5;
    component.decrement();
    expect(component.counter.value).toEqual(4);
  })

  describe('Super-Level',() => {
    it('should increment by 3', () => {
      component.counter.value = 22;
      component.counter.superLevel = 1;
      component.increment();
      expect(component.counter.value).toEqual(25)
    })

  })

  describe('UI Component', () => {
    let element: HTMLElement;

    beforeEach(() => {
      fixture.detectChanges();
      element = fixture.elementRef.nativeElement;
      let button = fixture.debugElement.nativeElement.querySelector('button');
     });
  
    it('should initialize at zero count', () => {
      let value = element.querySelector('.counter-count').innerHTML;
      expect(value).toEqual('0');
    });

    it('should increment on the click of the up button', () => {
      element.querySelectorAll('button')[1].click();
      fixture.detectChanges();
      let value = element.querySelector('.counter-count').innerHTML;
      expect(value).toEqual('1');
    })

    it('should not go below zero on the click of the down button', () => {
      element.querySelectorAll('button')[0].click();
      fixture.detectChanges();
      let value = element.querySelector('.counter-count').innerHTML;
      expect(value).toEqual('0');
    })

    it('should decrement on the click of the down button', () => {
      component.counter.value = 7;
      element.querySelectorAll('button')[0].click();
      fixture.detectChanges();
      let value = element.querySelector('.counter-count').innerHTML;
      expect(value).toEqual('6');
    })
  })


});
