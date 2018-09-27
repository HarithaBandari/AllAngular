import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-of-heroes',
  templateUrl: './list-of-heroes.component.html',
  styleUrls: ['./list-of-heroes.component.css']
})

export class ListOfHeroesComponent implements OnInit {
  heroes = [
    { id: 1, name: 'Srk' },
    { id: 2, name: 'Batman' },
    { id: 3, name: 'Superman'},
    { id: 4, name: 'Salman'},
    { id: 5, name: 'Mahesh'},
    { id: 6, name: 'Pk'},
    { id: 7, name: 'Prabhas'},
    { id: 8, name: 'Spiderman'},
    { id: 9, name: 'Justin'},
    { id: 10, name: 'Honey'}
  ];

  constructor(private router: Router) {}

  ngOnInit() {}
  onSelect(hero) {
    this.router.navigate(['/detail', hero.id]);
  }


}
