import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpCalls } from '../../skupno/storitve/http-klici.service';
import { Artikel } from '../../skupno/objekti/Artikel';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
@Component({
  selector: 'store-home-page',
  templateUrl: './store-home-page.component.html',
  styleUrls: [
    './store-home-page.component.css'
  ]
})


export class StoreHomePage implements OnInit, OnDestroy {
  title : String;
  akcije : any;
  artikli : any;
  max_popust : number;
  
  constructor(
    private db_call : HttpCalls,
    private router : Router
  ){}

    ngOnInit() {
      console.log("Hello to Store Home Page!");
    }
    ngOnDestroy() {
      // Clean sub to avoid memory leak
      console.log("Bye");
    }
    
}