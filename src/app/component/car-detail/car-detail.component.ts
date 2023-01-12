import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/car/carDetail';
import { CarService } from 'src/app/services/car/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent implements OnInit{

  carDetails: CarDetail[] = []
  selectedCar: CarDetail
  isDatLoaded: boolean = false


  constructor(private carService:CarService, private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params=>{
      if(params["carId"]){
        this.getCarDetails(params["carId"])
        
      }
    })
  }


  getCarDetails(carId:number){
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

      this.carDetails.forEach(element => {
        if(element.id == carId){
          this.selectedCar = element
        }
      });

      this.isDatLoaded = true
      
    
    })

  }

}
