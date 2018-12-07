import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Glava } from './skupno/direktive/glava.component';
import { Noga } from './skupno/direktive/noga.component';
import { HomePage } from './home-page/home-page.component';

@NgModule({
  declarations: [
    HomePage,
    Glava,
    Noga
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [HomePage]
})

export class AppModule { }
