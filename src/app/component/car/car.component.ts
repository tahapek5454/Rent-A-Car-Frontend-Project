import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car/car';
import { CarDetail } from 'src/app/models/car/carDetail';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {

  cars: Car[] = []
  carDetails: CarDetail[] = []
  isDatLoaded: boolean = false
  isDetailLoaded:boolean = false

  constructor(private carService: CarService, private activatedRoute:ActivatedRoute) { }

  // componentin dom'a yerlesmesinde olucak seyler bizim console'a yazacagimiz seyler gibi
  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"]){
        this.getCarsByBrandId(params["brandId"])
      }else{
       
          this.getCarDetails()
        
      }
    })

    

    



  }

  getCarDetails(){
    this.carService.getCarDetails().subscribe(response => {
      this.carDetails = response.data
   
      this.isDatLoaded = true

    })

  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
 
      this.isDatLoaded = true
    })
  }

  getCarsByBrandId(brandId: number) {
    this.carService.getCarsByBrandId(brandId).subscribe(response => {
      this.cars = response.data
      
      this.isDatLoaded = true
    })
  }




}
