import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarResponseModel } from 'src/app/models/carResponseModel';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit{

  cars:Car[] = []
  isDatLoaded:boolean = false





  constructor(private carService:CarService){}

  // componentin dom'a yerlesmesinde olucak seyler bizim console'a yazacagimiz seyler gibi
  ngOnInit(): void {
    
    this.getCars()

    
    
  }





  getCars(){
    this.carService.getCars().subscribe(response => {
      this.cars = response.data
      this.isDatLoaded = true
    })
  }



}
