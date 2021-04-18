import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClothesComponent } from './clothes/clothes.component';
import { ShoesComponent } from './shoes/shoes.component';
import { TrousersComponent } from './trousers/trousers.component';
import { MenClothesComponent } from './clothes/men-clothes/men-clothes.component';
import { WomenClothesComponent } from './clothes/women-clothes/women-clothes.component';
import { MenShoesComponent } from './shoes/men-shoes/men-shoes.component';
import { WomenShoesComponent } from './shoes/women-shoes/women-shoes.component';
import { MenTrComponent } from './trousers/men-tr/men-tr.component';
import { WomenTrComponent } from './trousers/women-tr/women-tr.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddEditMenCComponent } from './clothes/men-clothes/add-edit-men-c/add-edit-men-c.component';
import { AddEditWCComponent } from './clothes/women-clothes/add-edit-w-c/add-edit-w-c.component';
import { AddEditMenSComponent } from './shoes/men-shoes/add-edit-men-s/add-edit-men-s.component';
import { AddEditWSComponent } from './shoes/women-shoes/add-edit-w-s/add-edit-w-s.component';
import { AddEditMTComponent } from './trousers/men-tr/add-edit-m-t/add-edit-m-t.component';
import { AddEditWTComponent } from './trousers/women-tr/add-edit-w-t/add-edit-w-t.component';

@NgModule({
  declarations: [
    AppComponent,
    ClothesComponent,
    ShoesComponent,
    TrousersComponent,
    MenClothesComponent,
    WomenClothesComponent,
    MenShoesComponent,
    WomenShoesComponent,
    MenTrComponent,
    WomenTrComponent,
    AddEditMenCComponent,
    AddEditWCComponent,
    AddEditMenSComponent,
    AddEditWSComponent,
    AddEditMTComponent,
    AddEditWTComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
