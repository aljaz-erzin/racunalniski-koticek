import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-component',
  templateUrl: './app.component.html'
})


export class AppComponent implements OnInit {

  navigationSubscription : any;
  constructor(
      private router: Router
  ){}

    ngOnInit() {
    }
    
}