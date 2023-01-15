import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { CartItem } from 'src/app/models/cartItem/cartItem';

import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-pay',
  templateUrl: './pay.component.html',
  styleUrls: ['./pay.component.css']
})
export class PayComponent implements OnInit{

  cartItems:CartItem[]=[]
  total:number=0
 

  constructor(private cartService:CartService, private taostrService:ToastrService){}

  ngOnInit(): void {
    this.getCart()
    this.calculate()
    
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
