import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreHomePage } from './store-pages/store-home-page/store-home-page.component';
import { HomePage } from './home-page/home-page.component';
import { ChatHomePage } from './chat-pages/chat-home-page/chat-home-page.component';
import { RecommendHomePage } from './recommend-pages/recommend-home-page/recommend-home-page.component';

const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full', data: { title: 'Prva stran' } },
  { path: 'store',  component: StoreHomePage,  pathMatch: 'full' , data: { title: 'Spletna trgovina' } },
  { path: 'recommendation',  component: RecommendHomePage,  pathMatch: 'full' , data: { title: 'Priporočila' } },
  { path: 'chat',  component: ChatHomePage,  pathMatch: 'full' , data: { title: 'Spletni chat' } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
