import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-list',
  templateUrl: './counter-list.component.html',
  styleUrls: ['./counter-list.component.css']
})
export class CounterListComponent implements OnInit {

  constructor() { }
    overallCounter: number;
  ngOnInit() {
    this.overallCounter = 5
  }

}
