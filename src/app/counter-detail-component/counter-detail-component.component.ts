import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-detail-component',
  templateUrl: './counter-detail-component.component.html',
  styleUrls: ['./counter-detail-component.component.css']
})
export class CounterDetailComponentComponent implements OnInit {

  constructor() { }
  value: number;

  ngOnInit() {
    this.value = 0;
  }

  increment() {
    this.value++;
  }

  decrement() {
    this.value--;
    if (this.value < 0) {
      this.value = 0;
    }
  }
}
