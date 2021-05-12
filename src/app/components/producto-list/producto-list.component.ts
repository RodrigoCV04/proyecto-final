import { Component, OnInit } from '@angular/core';
import {ApiService} from './../../service/api.service';


@Component({
  selector: 'app-producto-list',
  templateUrl: './producto-list.component.html',
  styleUrls: ['./producto-list.component.css']
})
export class ProductoListComponent implements OnInit {


Producto:any = [];

  constructor(private apiService: ApiService) { 
    this.readProduct();
  }

  readProduct(){
    this.apiService.getProductos().subscribe((data) =>{
      this.Producto = data;
      console.log(data)
    })
  }

  removeProduct(product : any, index : any) {
    if(window.confirm('Estás seguro de realizar esta accion?')) {
      this.apiService.deleteProducto(product._id).subscribe((data) =>{
        this.Producto.splice(index, 1);
        }
      )
    }
  }

  ngOnInit(): void {
  }

}
