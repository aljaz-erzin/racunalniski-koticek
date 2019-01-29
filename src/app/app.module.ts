import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { Glava } from './skupno/direktive/glava.component';
import { Noga } from './skupno/direktive/noga.component';
import { HomePage } from './home-page/home-page.component';
import { StoreHomePage } from './store-pages/store-home-page/store-home-page.component';
import { OrderModule } from 'ngx-order-pipe';
import { AppComponent } from './app.component';
import { ChatHomePage } from './chat-pages/chat-home-page/chat-home-page.component';
import { RecommendHomePage } from './recommend-pages/recommend-home-page/recommend-home-page.component';
import { Login } from './login-registration-pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    Login,
    StoreHomePage,
    ChatHomePage,
    RecommendHomePage,
    Glava,
    Noga
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    OrderModule,
    FormsModule,
    NgbModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
