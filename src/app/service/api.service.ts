import { Injectable } from '@angular/core';
import {from, Observable, throwError} from 'rxjs'; 
import {catchError, map} from 'rxjs/operators'; 

import {HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http'
import { Usuario } from 'src/model/usuario.model';
import { Producto } from 'src/model/producto.model';
import { Servicio } from 'src/model/servicio.model'
import {Empleado} from 'src/model/empleado.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUri: string  = 'http://localhost:4000/api'; 
  headers = new HttpHeaders().set('Content-Type', 'aplication/json'); 

  constructor( private http : HttpClient) {
   }

   //create usuario
   createUsuario(data :any): Observable<any> {
     console.log(data);
     let url = `${this.baseUri}/create`; 
     return this.http.post(url, data)
     .pipe(
       catchError(this.errorMsg)
     )
   }

   getUsuarios(){
     return this.http.get(`${this.baseUri}`); 
   }

   getUsuario(id : any): Observable<any> { 
    let url = `${this.baseUri}/read/${id}`; 
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res : any) =>{
        return res || {}
      }), 
      catchError(this.errorMsg)
    )
   }

   //update usuario
   updateUsuario(id: any, data: any): Observable<any> {
    let url = `${this.baseUri}/update/${id}`;
    console.log('En el service');
    console.log(data);
    return this.http.put<Usuario>(url, data).pipe(
      
      catchError(this.errorMsg)
    )
  }

    //delete usuario
    deleteUsuario(id: any): Observable<any>{
      let url = `${this.baseUri}/delete/${id}`; 
      return this.http.delete(url, {headers: this.headers}).pipe(
        catchError(this.errorMsg)
      )
    }


   errorMsg(error : HttpErrorResponse){
     let errorMessage = ''; 
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message; 
    }else{
      errorMessage = `Error Code: ${error.status}\n Message : $(error.message)`; 

    }  
      console.log(errorMessage); 
      return throwError(errorMessage); 
  }


   //create producto
   createProducto(data :any): Observable<any> {
     console.log(data);
     let url = `${this.baseUri}/createP`; 
     return this.http.post(url, data)
     .pipe(
       catchError(this.errorMsg)
     )
   }

   getProductos(){
    return this.http.get(`${this.baseUri}/productos`); 
  }

  getProducto(id : any): Observable<any> { 
    let url = `${this.baseUri}/readP/${id}`; 
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res : any) =>{
        return res || {}
      }), 
      catchError(this.errorMsg)
    )

  }

     //update producto
     updateProducto(id: any, data: any): Observable<any> {
      let url = `${this.baseUri}/updateP/${id}`;
      console.log('En el service');
      console.log(data);
      return this.http.put<Producto>(url, data).pipe(
        
        catchError(this.errorMsg)
      )
    }

    //delete producto
    deleteProducto(id: any): Observable<any>{
      let url = `${this.baseUri}/deleteP/${id}`; 
      return this.http.delete(url, {headers: this.headers}).pipe(
        catchError(this.errorMsg)
      )
    }


   errorMesg(error : HttpErrorResponse){
     let errorMessage = ''; 
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message; 
    }else{
      errorMessage = `Error Code: ${error.status}\n Message : $(error.message)`; 

    }  
      console.log(errorMessage); 
      return throwError(errorMessage); 
  }

  //create servicio 
  createServicio(data:any): Observable<any>{
    console.log(data);
    let url = `${this.baseUri}/createS`;
    return this.http.post(url, data)
    .pipe(
      catchError(this.errorMesg)
    )
  }

  getServicios(){
    return this.http.get(`${this.baseUri}/servicios`);
  }

  getServicio(id : any) : Observable<any>{
    let url = `${this.baseUri}/readS/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res : any) =>{
        return res || {}
      }),
      catchError(this.errorMessg)
    )
  }

  //update Servicio
  updateServicio(id: any, data: any) : Observable<any> {
    let url = `${this.baseUri}/updateS/${id}`;
    console.log('En el service');
    console.log(data);
    return this.http.put<Servicio>(url, data).pipe(
      catchError(this.errorMessg)
    )
  }

  //delete Servicio
  deleteServicio(id: any): Observable<any>{
    let url = `${this.baseUri}/deleteS/${id}`;
    return this.http.delete(url, {headers: this.headers}).pipe(
      catchError(this.errorMessg)
    )
  }

  errorMessg(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code: ${error.status}\n Message : $(error.message)`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

  //create Empleado
  createEmpleado(data:any): Observable<any>{
    console.log(data);
    let url = `${this.baseUri}/createE`;
    return this.http.post(url, data)
    .pipe(
      catchError(this.errorMessag)
    )
  }

  getEmpleados(){
    return this.http.get(`${this.baseUri}/empleados`);
  }

  getEmpleado(id : any) : Observable<any>{
    let url = `${this.baseUri}/readE/${id}`;
    return this.http.get(url, {headers: this.headers}).pipe(
      map((res : any) =>{
        return res || {}
      }),
      catchError(this.errorMessag)
    )
  }

  //update Empleado
  updateEmpleado(id : any, data: any) : Observable<any>{
    let url = `${this.baseUri}/updateE/${id}`;
    console.log('En el servicio');
    console.log(data);
    return this.http.put<Empleado>(url, data).pipe(
      catchError(this.errorMessag)
    )
  }

  //delete Empleado
  deleteEmpleado(id: any): Observable<any>{
    let url = `${this.baseUri}/deleteE/${id}`;
    return this.http.delete(url, {headers: this.headers}).pipe(
      catchError(this.errorMessag)
    )
  }

  errorMessag(error: HttpErrorResponse){
    let errorMessage = '';
    if(error.error instanceof ErrorEvent){
      errorMessage = error.error.message;
    }else{
      errorMessage = `Errror Code: ${error.status}\n Message : $(error.message)`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

 









}
