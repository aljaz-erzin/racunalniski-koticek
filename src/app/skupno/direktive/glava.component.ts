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
            $('#button-home').hide();
            $('#naslovna-slika').show();
            $('.navbar').removeClass('shrink');
        }, mouseleave: function() {
            $('#naslovna-slika').hide();
            $('#button-home').show();
          $('.navbar').addClass('shrink');
        }
      });
    
    $(window).on({
        scroll: function() {
            if ($(document).scrollTop() > 50) {
                $('#naslovna-slika').hide();
                $('#button-home').show();
              $('.navbar').addClass('shrink');
            } else {
                $('#button-home').hide();
                $('#naslovna-slika').show();
                $('.navbar').removeClass('shrink');
            }
        }
    });
});