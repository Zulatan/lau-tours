import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router'; //fra ionic bog kap 4 s91

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  tour = null; //fra ionic bog kap 4 s91  

  constructor(private activatedRoute: ActivatedRoute) { } //fra ionic bog kap 4 s91  

  ngOnInit() {
    console.log(this.activatedRoute);
    // this.tour = this.activatedRoute.snapshot.params;
  }

}
