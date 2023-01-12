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
    FilterPipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
