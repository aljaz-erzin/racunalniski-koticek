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
    Ime : String;
    Passwd : String;
    username : String;
    messages = this.http.get<any[]>('http://localhost:4201/users');
    constructor(private http: HttpClient) {}
    
    Post()
    {
      this.http.post<any>('http://localhost:4201/users', {username: this.Ime, password: this.Passwd})
      .subscribe(next => console.log(next));
    }
}