import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
public heroId;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    const id = parseInt[this.route.snapshot.paramMap . get('id')];
    this.heroId = id;
  }

}
