import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand/brand';
import { BrandService } from 'src/app/services/brand/brand.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands:Brand[] = []
  currentBrand:Brand
  statusAllCarButton = false

  constructor(private brandService:BrandService){}

  ngOnInit(): void {

    this.getBrands()
    
  }

  setCurrentBrand(brand:Brand){
    this.currentBrand = brand
  }

  changeStatusAllCarButton(){
    this.statusAllCarButton = !this.statusAllCarButton
    this.currentBrand={
      id:0,
      name:""
    }
  }
  
  getCurrentBrand(brand?: Brand){
    
    if(this.currentBrand == brand) {
      this.statusAllCarButton = false
      return "list-group-item list-group-item-action active"}

    else return "list-group-item list-group-item-action"
  }

  getBrands(){
    this.brandService.getBrands().subscribe(response => {
      this.brands = response.data
    })
  }



}
