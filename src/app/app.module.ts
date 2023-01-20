import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; //httClient'a injection yapar
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // ngModule entegresi

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
import { PayComponent } from './component/pay/pay.component';
import { CarAddComponent } from './component/car-add/car-add.component';
import { LoginComponent } from './component/login/login.component';

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
    FilterForColorPipe,
    PayComponent,
    CarAddComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
