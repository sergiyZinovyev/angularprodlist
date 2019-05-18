import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string;
  price: number;
  subTotalPrice: number = 0;

  prodList = [
    {
      id: 1,
      name: "product1",
      price: 1
    },
    {
      id: 2,
      name: "product2",
      price: 2
    },
    {
      id: 3,
      name: "product3",
      price: 3
    }
  ];

  addProd(){
    if (this.name == '' || this.price == undefined){return}
    this.prodList.push({id: this.prodList.length+1, name: this.name, price: Number(this.price)})
    this.name = '';
    this.price = undefined;
    this.quantityProdInList();

  }
  delProd(id: number):void {
    this.prodList.splice(this.checkArrIdVal(this.prodList, id), 1);
    this.quantityProdInList();
    console.log("del");
  }

  checkArrIdVal(array, val):number {
    for (let i: number = 0; i < array.length; i++){
      if (array[i].id === val){
        return i;
      }
    }
  }

  quantityProdInList(){
    this.subTotalPrice = 0;
    for(let i:number = 0; i < this.prodList.length; i++){
      this.subTotalPrice += this.prodList[i].price;
      console.log(this.prodList[i].price);
    }

  }

}
  
