import { Injectable } from '@angular/core';
import { CarDetail } from 'src/app/models/car/carDetail';
import { CartItem } from 'src/app/models/cartItem/cartItem';
import { CartItems } from 'src/app/models/cartItem/cartItems';



@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }


  addToCart(carDetail:CarDetail){
    let item = CartItems.find(c => c.carDetail.id == carDetail.id)

    if(item){
      item.quantity += 1
    }else{

      let cartItem = new CartItem()
      cartItem.carDetail = carDetail
      cartItem.quantity = 1

      CartItems.push(cartItem)
      
    }

  }

  removeToCart(carDetail:CarDetail){
    let item = CartItems.find(c => c.carDetail.id == carDetail.id)

    CartItems.splice(CartItems.indexOf(item),1)


  }

  list(){
    return CartItems 
  }

}
