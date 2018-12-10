import { Component, OnInit } from '@angular/core';
import { HttpCalls } from '../skupno/storitve/http-klici.service';
import { Artikel } from '../skupno/objekti/Artikel';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [
    './home-page.component.css'
  ]
})


export class HomePage implements OnInit{
  title : String;
  akcije : any;
  artikli : any;
  max_popust : number;

  constructor(
    private db_call : HttpCalls
  ){}

    ngOnInit() {
      this.title = 'Vstopna Stran';
      this.akcije = this.db_call.GetPopustDesc();
      this.akcije.forEach(element => {
        this.max_popust = element[0].popust;
        return;
      });
    }
    
    
}