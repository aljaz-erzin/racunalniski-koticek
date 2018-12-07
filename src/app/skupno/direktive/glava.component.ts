import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";
@Component({
  selector: 'glava',
  templateUrl: './glava.component.html',
  styleUrls: ['./glava.component.css']
})



export class Glava {

    
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