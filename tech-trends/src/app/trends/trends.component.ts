import { Component, OnInit } from '@angular/core';
import { Trend } from '../trends';
import { TRENDS } from '../mock-trends';

@Component({
  selector: 'app-trends',
  templateUrl: './trends.component.html',
  styleUrls: ['./trends.component.css']
})
export class TrendsComponent implements OnInit {
  trends: Trend = {
    id: 1,
    name: 'cloud'
  };

  constructor() { }

  ngOnInit() {
  }

}
