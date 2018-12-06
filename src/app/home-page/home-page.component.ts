import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePage{
    title = 'Računalniški kotiček';
    stranke_db = 'http://localhost:4201/stranke/';
    id = 544;
    
    nova_stranka = {ime: 'Uros', priimek: 'Znidar', e_mail: 'znidar@gmail.com', uporabnisko_ime: 'urosZZ', geslo: 'geslodelauros'};
    all_stranke = this.http.request('get', this.stranke_db);
    // delete =  this.http.request('delete', this.stranke_db + this.id).subscribe();
    added_user = this.http.request('post', this.stranke_db,  {body : this.nova_stranka}).subscribe();
    constructor(private http: HttpClient) {}

    izpisKonzola(msg)
    {
      console.log(msg);
    } 
}