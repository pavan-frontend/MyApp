import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public products: any = [
    { productname: 'pen', price: 10, rating: 3, freedeliver: true, },
    { productname: 'phone', price: 13000, rating: 4, freedeliver: false, },
    { productname: 'shirt', price: 600, rating: 3.5, freedeliver: true,},
    { productname: 'cap', price: 300, rating: 4.5, freedeliver: false },
    { productname: 'mobilecase', price: 500, rating: 3.5, freedeliver: false },
    { productname: 'remote', price: 250, rating: 4.3, freedeliver: true }

  ]
  // public term:string = "";
  // filter(){
  //   this.products = this.products.filter((value:any)=>value.name.includes(this.term))

  // }

  public term: string = "";
  // filter names
  filter() {
    this.products = this.products.filter((product: any) => product.productname.includes(this.term))
  }
  // onltfree
  onlyfreed() {
    this.products = this.products.filter((product: any) => product.freedeliver == true)

  }
  // priceLtoH
  priceLtoH() {
    this.products = this.products.sort((a: any, b: any) => a.price - b.price)

  }
  // price
  priceHtoL() {
    this.products = this.products.sort((a: any, b: any) => b.price - a.price)
  }
  // rating L to H
  ratingLtoH() {
    this.products = this.products.sort((a: any, b: any) => a.rating - b.rating)
  }
  // rating H to L
  ratingHtoL() {
    this.products = this.products.sort((a: any, b: any) => b.rating - a.rating)
  }
  // discount 50%
  Discount() {
    this.products = this.products.map((product: any) => {
      product.price = product.price * 0.5;
      return product;

    });
  }
  //  Free delivery
  Delivery() {
    this.products = this.products.map((product: any) => {
      product.price = product.price + 30;
      return product;
    });
  }
  // Total price

  Total() {
    let total = this.products.reduce((sum: any, a: any) => sum + a.price, 0);
    alert(total);
  }
  // Total Cart items
  Cartitems() {
    let total = this.products.length;
    alert(total);

  }

  // delete
  delete(i:any){
    this.products.splice(i,1);
  }


}
