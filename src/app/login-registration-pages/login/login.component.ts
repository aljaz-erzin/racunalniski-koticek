import { Component, OnInit,ViewChild, OnDestroy } from '@angular/core';
import { HttpCalls } from '../../skupno/storitve/http-klici.service';
import { Stranka } from '../../skupno/objekti/Stranka';
import { NgbCarousel, NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { Location } from '@angular/common'; 
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: [
    './login.component.css'
  ]
})


export class Login implements OnInit, OnDestroy {
  constructor(
    private db_call : HttpCalls,
    private router: Router,
    private location: Location
  ){}

    ngOnInit() {
      this.Login("andraz", "andrazerzingeslo");
    }
    

    ngOnDestroy() {
      // Clean sub to avoid memory leak
      console.log("Hy and goodbye");

    }
    
    Login = function(username, passwd)
    {
      console.log(this.db_call.Login(username, passwd));
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