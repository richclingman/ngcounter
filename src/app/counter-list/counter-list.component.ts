import { Component, OnInit } from '@angular/core';
import { CounterDetailComponentComponent } from '../counter-detail-component/counter-detail-component.component';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})

export class CounterListComponent implements OnInit {

  constructor() { }
  counters: any[];

  ngOnInit() {
    this.counters = [];
  }

  createCounter() {
    const counter =
    {
      value: 0,
      isSuper: 0,
    }
    if (this.counters.filter(counter => !counter.isSuper).length === 5) {
      counter.isSuper = 1;
      const totalCounter = this.counters
        .filter(counter => !counter.isSuper)
        .reduce((sumCounter, counter) => {
          return sumCounter + counter.value;
        }, 0)
      counter.value = totalCounter;

      this.counters = this.counters.filter((counter) => {
        return counter.isSuper;
      })
    }
    this.counters.push(counter);
  }
}
