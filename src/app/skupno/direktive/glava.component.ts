import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
import { Router } from '@angular/router';
import { Location } from '@angular/common'; 


@Component({
  selector: 'glava',
  templateUrl: './glava.component.html',
  styleUrls: ['./glava.component.css']
})



export class Glava {

    constructor(
        private router: Router,
        private location: Location
      ){}   

    redirect = function(ukaz)
    {
      if (ukaz === 'login')
      {
        console.log(ukaz);
        this.router.navigate(['login']);
      }
    }
    
}

$(function(){ 

    $( "nav" ).on({
        mouseover: function() {
            if ($(document).scrollTop() > 50)
            {
                $('#navigation-bar-napis').hide();
                $('.navbar-brand').show();
                $('.navbar').removeClass('shrink');
            }
        }, mouseleave: function() {
            if ($(document).scrollTop() > 50)
            {
                $('.navbar-brand').hide();
                $('#navigation-bar-napis').show();
                $('.navbar').addClass('shrink');
            }
        }
      });
    
    $(window).on({
        scroll: function() {
            if ($(document).scrollTop() > 50) {
                $('.navbar-brand').hide();
                $('#navigation-bar-napis').show();
              $('.navbar').addClass('shrink');
            } else {
                $('#navigation-bar-napis').hide();
                $('.navbar-brand').show();
                $('.navbar').removeClass('shrink');
            }
        }
    });
});