import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenClothesComponent } from './clothes/men-clothes/men-clothes.component';
import { WomenClothesComponent } from './clothes/women-clothes/women-clothes.component';
import { MenShoesComponent } from './shoes/men-shoes/men-shoes.component';
import { WomenShoesComponent } from './shoes/women-shoes/women-shoes.component';
import { MenTrComponent } from './trousers/men-tr/men-tr.component';
import { WomenTrComponent } from './trousers/women-tr/women-tr.component';

const routes: Routes = [
  { path: 'menclothes', component: MenClothesComponent},
  { path: 'menshoes', component: MenShoesComponent},
  { path: 'mentrousers', component: MenTrComponent},
  { path: 'womenclothes', component: WomenClothesComponent},
  { path: 'womenshoes', component: WomenShoesComponent},
  { path: 'womentrousers', component: WomenTrComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
