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
    const counter = new CounterDetailComponentComponent();
    this.counters.push(counter);
  }


}
