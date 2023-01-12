import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //httClient'a injection yapar
import { FormsModule } from '@angular/forms'; // ngModule entegresi

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './component/car/car.component';
import { BrandComponent } from './component/brand/brand.component';
import { NaviComponent } from './component/navi/navi.component';
import { ColorComponent } from './component/color/color.component';
import { RentalComponent } from './component/rental/rental.component';
import { CarDetailComponent } from './component/car-detail/car-detail.component';
import { VarAddedPipe } from './pipes/var-added.pipe';
import { FilterPipePipe } from './pipes/filter-pipe.pipe';
import { CartSummaryComponent } from './component/cart-summary/cart-summary.component';

import {BrowserAnimationsModule} from "@angular/platform-browser/animations"
import { ToastrModule } from 'ngx-toastr';
import { FilterForColorPipe } from './pipes/filter-for-color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    BrandComponent,
    NaviComponent,
    ColorComponent,
    RentalComponent,
    CarDetailComponent,
    VarAddedPipe,
    FilterPipePipe,
    CartSummaryComponent,
    FilterForColorPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
