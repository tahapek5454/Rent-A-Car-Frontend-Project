import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'RentACarFrontend';
  user = 'Taha Pek'
  product1: any = { productId: 1, productName: "Bardak", categoryId: 1, unitPrice: 5 }
  product2: any = { productId: 1, productName: "Bardak", categoryId: 1, unitPrice: 5 }
  product3: any = { productId: 1, productName: "Bardak", categoryId: 1, unitPrice: 5 }
  products = [this.product1, this.product2, this.product3]

}
