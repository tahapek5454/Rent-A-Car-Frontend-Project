import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem/cartItem';
import { Rent } from 'src/app/models/rental/rent';

import { CartService } from 'src/app/services/cart/cart.service';
import { RentalService } from 'src/app/services/rental/rental.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit{

  cartItems:CartItem[]=[]
  total:number=0
  rent:Rent[]=[]
 

  constructor(private cartService:CartService,
              private toastrService:ToastrService,
              private rentalService:RentalService){}

  ngOnInit(): void {
    this.getCart()
    this.calculate()
    this.getRent()
    
  }

  sleep() {
    return new Promise(resolve => setTimeout(resolve, 2000));
  }

  getRent(){
    this.cartItems.forEach(element => {
      let myrent = new Rent()
      myrent.customerId = 3
      myrent.carId = element.carDetail.carId
      
      this.rent.push(myrent)
             
    });
  }

  async add(){


        console.log(this.rent)
    
        for (let a = 0 ; a< this.rent.length; a++){

        let element = this.rent[a]

        console.log(JSON.stringify(element))

        this.rentalService.addRental(element).subscribe(response =>{
        console.log(response)
        this.toastrService.success(response.message,"Basarili")
          
        },(responseError)=>{  // Business Rules Not exception but bad Request handler
            console.log(responseError)

            if(Object.keys(responseError.error).length == 2){

            this.toastrService.error(responseError.error.message,"Dogrulama Hatasi")


            }
            else if(responseError.error.Errors.length > 0){ //Validation Exception + BadRequest
    
              for (let index = 0; index < responseError.error.Errors.length; index++) {
                let element = responseError.error.Errors[index];
    
                this.toastrService.error(element.ErrorMessage,"Dogrulama Hatasi")
                
              }
              
    
            }
  
        
        
      })


      console.log("selam")
      await this.sleep()
      
      
      

  }
}




  getCart(){
    this.cartItems = this.cartService.list()
    
  }
  calculate(){
    let mytotal = 0
    this.cartItems.forEach(element => {

     mytotal+= element.quantity*element.carDetail.dailyPrice
      
    });

    this.total = mytotal
  }

  

}
