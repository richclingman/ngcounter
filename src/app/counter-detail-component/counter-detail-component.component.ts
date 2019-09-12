import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter-detail-component',
  templateUrl: './counter-detail-component.component.html',
  styleUrls: ['./counter-detail-component.component.css']
})
export class CounterDetailComponentComponent implements OnInit {

  constructor() { }
  @Input()
  counter: {
    value: number;
    isSuper: boolean;
  }

  ngOnInit() {
    if (!this.counter) {
      this.counter = {
        value: 0,
        isSuper: false,
      }
    }
  }

  increment() {
    this.counter.value++;
  }

  decrement() {
    this.counter.value--;
    if (this.counter.value < 0) {
      this.counter.value = 0;
    }
  }
}
