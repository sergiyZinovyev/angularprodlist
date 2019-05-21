import { Component } from '@angular/core';
import { List } from './type';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  name: string;
  price: number;
  searchText: string;
  priceDirect: string;
  nameDirect: string;
  idDirect: string;

  filtrParam: {column: string, direct: string} = {
    column: "id",
    direct: "asc"
  }

  prodList: List[] = [
    {
      id: 1,
      name: "milk",
      price: 1.25
    },
    {
      id: 2,
      name: "bread",
      price: 0.95
    },
    {
      id: 3,
      name: "meat",
      price: 2.5
    }
  ];

  ngOnInit(){
  }

  addProd(): void {
    if (this.name == '' || this.price == undefined){return}
    this.prodList.push({id: this.prodList.length+1, name: this.name, price: Number(this.price)})
    this.name = '';
    this.price = undefined;
  }

  delProd(id: number):void {
    this.prodList.splice(this.checkArrIdVal(this.prodList, id), 1);
  }

  checkArrIdVal(array: List[], val: number):number {
    for (let i: number = 0; i < array.length; i++){
      if (array[i].id === val){
        return i;
      }
    }
  }

  changeFiltr(colName: string): string{
    
    this.filtrParam.column = colName;
    
    switch(colName){
      case 'price': {
        this.nameDirect = '';
        this.idDirect = '';
        if(this.filtrParam.direct == "asc"){this.priceDirect = '↓'}
        else{this.priceDirect = '↑'}
        break;
      }
      case 'name': {
        this.priceDirect = '';
        this.idDirect = '';
        if(this.filtrParam.direct == "asc"){this.nameDirect = '↓'}
        else{this.nameDirect = '↑'}
        break;
      }
      case 'id': {
        this.nameDirect = '';
        this.priceDirect = '';
        if(this.filtrParam.direct == "asc"){this.idDirect = '↓'}
        else{this.idDirect = '↑'}
        break;
      }
    }
    
    if(this.filtrParam.direct == "desc"){return this.filtrParam.direct = "asc"}
    if(this.filtrParam.direct == "asc"){return this.filtrParam.direct = "desc"}
  }
}
  
