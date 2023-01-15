import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit{

  carAddForm:FormGroup
  constructor(private formBuilder:FormBuilder, private carService:CarService, private toastrService:ToastrService){}

  ngOnInit(): void {
   this.createCarAddForm()
  }


  add(){

    if(this.carAddForm.valid){
      let carModel = Object.assign({}, this.carAddForm.value)
      console.log(JSON.stringify(carModel) )
      this.carService.addCar(carModel).subscribe(response =>{
        console.log(response)
      })
      this.toastrService.success("Arac Eklendi","Basarili")

    }else{
      this.toastrService.error("Form Hatali","Dikkat")
    }
    

  }

  createCarAddForm(){

    this.carAddForm = this.formBuilder.group({
      brandId:["", Validators.required],
      colorId:["", Validators.required],
      modelYear:["", Validators.required],
      dailyPrice:["", Validators.required],
      description:["", Validators.required],
    })

  }

}
