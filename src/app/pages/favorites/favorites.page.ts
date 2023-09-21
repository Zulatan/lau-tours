import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit { //OnInit is a lifecycle hook. Components have lifecycles and the cycle can be hooked at any point. OnInit is hooked on the creation of the component.
  tours = [ //kodelinje og 4 linjer ned tilføjet fra ionic bog kap 4.4 s89
    { ID: 1, Title: 'City walk' },
    { ID: 2, Title: 'On the trails of Beethoven' },
    { ID: 3, Title: 'Villa Hammerschmidt' }
    ];

  constructor() { }

  ngOnInit() {
    // Code to be executed when the component is initialized
    // This is often used for initialization logic, making HTTP requests, etc.
  }

}
