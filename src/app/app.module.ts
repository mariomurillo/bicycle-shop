import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';
import { MainComponent } from './main/main.component';
import { RightComponent } from './right/right.component';
import { FooterComponent } from './footer/footer.component';
import { MaterializeModule } from 'angular2-materialize';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './/app-routing.module';
import { PurchasesComponent } from './purchases/purchases.component';
import { ProductsService } from './products.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    MainComponent,
    RightComponent,
    FooterComponent,
    ProductsComponent,
    PurchasesComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterializeModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
