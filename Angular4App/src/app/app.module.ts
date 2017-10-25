import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Example1Component } from './example1/example1.component';
import { LinksComponent } from './links/links.component';

import { RouterModule, Routes } from '@angular/router';

import { DropdownDirective } from './shared/dropdown.directive';

const appRoutes: Routes = [
  { path: 'example1', component: Example1Component },
  { path: 'links',      component: LinksComponent },
 ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Example1Component,
    LinksComponent,
    DropdownDirective,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
