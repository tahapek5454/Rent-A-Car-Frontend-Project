import { Component, OnInit } from '@angular/core';
import { Rental } from 'src/app/models/rental/rental';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css']
})
export class RentalComponent implements OnInit {

  rentalDetails:Rental[] = []
  isDataLoaded = false

  constructor(private rentalService:RentalService){}

  ngOnInit(): void {
    this.getRentalDetails()
  }

  getRentalDetails(){
    this.rentalService.getRentalDetail().subscribe(response=>{
      this.rentalDetails = response.data
      this.isDataLoaded = true
    })
  }

}
