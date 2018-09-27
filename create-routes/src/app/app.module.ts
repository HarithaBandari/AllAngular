import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { RouterModule, Routes } from '@angular/router';

import { ListOfHeroesComponent } from './list-of-heroes/list-of-heroes.component';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
const appRoutes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'heroes', children: [
  { path: 'list', component: ListOfHeroesComponent,
    children: [{ path: 'detail/:id', component: HeroDetailsComponent }] }]
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '/dashboard', pathMatch: 'full'}
];
@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
      ListOfHeroesComponent,
    HeroDetailsComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
