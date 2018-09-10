import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { PurchasesComponent } from './purchases/purchases.component';

const routes: Routes = [
  { path: 'products', component: ProductsComponent },
  { path: 'purchases', component: PurchasesComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
