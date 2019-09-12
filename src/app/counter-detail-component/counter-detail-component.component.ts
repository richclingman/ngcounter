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
    superLevel: number;
  }

  ngOnInit() {
    if (!this.counter) {
      this.counter = {
        value: 0,
        superLevel: 0,
      }
    }
  }

  increment() {
    if (this.counter.superLevel === 0) {
      this.counter.value++;
    }
    else {
      this.counter.value += 3;
    }
  }

  decrement() {
    this.counter.value--;
    if (this.counter.value < 0) {
      this.counter.value = 0;
    }
  }
}
