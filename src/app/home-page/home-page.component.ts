import { Component, OnInit } from '@angular/core';
import { HttpCalls } from '../skupno/storitve/http-klici.service';
import { Artikel } from '../skupno/objekti/Artikel'

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: [
    './home-page.component.css'
  ]
})


export class HomePage implements OnInit{
  title : String;

  constructor(
    private db_call : HttpCalls
  ){}

    ngOnInit() {
      this.title = 'Vstopna Stran';
    }
    
    
}