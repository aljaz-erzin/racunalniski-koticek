import { Component, OnInit,ViewChild, OnDestroy } from '@angular/core';
import { HttpCalls } from '../skupno/storitve/http-klici.service';
import { Artikel } from '../skupno/objekti/Artikel';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Location } from '@angular/common'; 

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [
    './home-page.component.css'
  ]
})


export class HomePage implements OnInit, OnDestroy {
  title : String;
  akcije : any;
  artikli : any;
  max_popust : number;
  navigationSubscription : any;
  constructor(
    private db_call : HttpCalls,
    private router: Router,
    private location: Location
  ){}

    ngOnInit() {
      this.title = 'Vstopna Stran';
      this.akcije = this.db_call.GetPopustDesc();
      this.akcije.forEach(element => {
        this.max_popust = element[0].popust;
        return;
      });
    }
    

    ngOnDestroy() {
      // Clean sub to avoid memory leak
      console.log("Hy and goodbye");
    }
    
    PictureToUrl(dir) : String {
      
      return null
    }


    redirect = function(ukaz)
    {
      if (ukaz === 'forum')
      {
        console.log(ukaz);
        this.router.navigate(['chat']);
      }
      if (ukaz === 'priporocila')
      {
        console.log(ukaz);
        this.router.navigate(['recommendation']);
      }
      if (ukaz === 'trgovina')
      {
        console.log(ukaz);
        this.router.navigate(['store']);
      }
    }
}