import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})


export class HomePage{
    title = 'Računalniški kotiček';

    messages = this.http.get<any[]>('http://localhost:4201/');
    
    constructor(private http: HttpClient) {}
  
}