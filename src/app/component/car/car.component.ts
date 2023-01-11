import { Component, OnInit } from '@angular/core';
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

  constructor(private carService: CarService) { }

  // componentin dom'a yerlesmesinde olucak seyler bizim console'a yazacagimiz seyler gibi
  ngOnInit(): void {

    // this.getCars()
    this.getCarDetails()



  }

  getCarDetails(){
    this.carService.getCarDetails("GetCarDetails").subscribe(response => {
      this.carDetails = response.data
      this.isDatLoaded = true

    })

  }

  getCars() {
    this.carService.getCars("GetAllCar").subscribe(response => {
      this.cars = response.data
      this.isDatLoaded = true
    })
  }



}
