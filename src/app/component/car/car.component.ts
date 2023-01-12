import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car/car';
import { CarDetail } from 'src/app/models/car/carDetail';
import { RentalAvaliable } from 'src/app/models/rental/rentalAvaliable';
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
  filterText=""
  filterTextColor=""
  avaliableCarIdCheck:number[] = []

  deneme:Car
  

  constructor(private carService: CarService, private activatedRoute:ActivatedRoute) { }

  // componentin dom'a yerlesmesinde olucak seyler bizim console'a yazacagimiz seyler gibi
  ngOnInit(): void {

    

    this.activatedRoute.params.subscribe(params =>{
      if(params["brandId"]){
        this.getCarDetailsByBrandId(params["brandId"])
        this.getAvaliableCar()

      }else if(params["colorId"]){
       console.log(params["colorId"])
        this.getCarDetailsByColorId(params["colorId"])
        this.getAvaliableCar()

        
      }else{
        this.getCarDetails()
        this.getAvaliableCar()
      }
    })

  }


  getAvaliableCar(){
    this.carService.getAvaliableCar().subscribe(response =>{

      var data:RentalAvaliable[] = response.data

      data.forEach(element => {

        if(element.returnDate == null){
          this.avaliableCarIdCheck.push(element.carId)
       
        }
        
      });

    })

  }

  checkAvaliable(car:CarDetail){

    console.log(this.avaliableCarIdCheck)

    if(this.avaliableCarIdCheck.includes(car.id)){
      return "btn btn-success disabled"
    }else{
      return "btn btn-success"
    }

  }

  getCarDetails(){
    var imageUrl = "https://localhost:44379/Uploads/Images/"
    var defaultImageUrl = "https://localhost:44379/Uploads/DefaultImage.jpg"
    
    
    this.carService.getCarDetails().subscribe(response => {
      this.carDetails = response.data
      this.carDetails.forEach(carDetail => {
        if(carDetail.imagePath == null){
          carDetail.imagePath=defaultImageUrl
        }else{
          carDetail.imagePath = imageUrl+carDetail.imagePath
        }
        
      });
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

  getCarDetailsByBrandId(brandId: number) {
    this.carService.getCarDetailsByBrandId(brandId).subscribe(response => {
      this.carDetails = response.data
      
      this.isDatLoaded = true
    })
  }

  getCarDetailsByColorId(coloId: number) {
    this.carService.getCarDetailsByColorId(coloId).subscribe(response => {
      this.carDetails = response.data
      
      this.isDatLoaded = true
    })
  }

  addToCart(car:CarDetail){
    console.log(car.brandName)
  }

}
