import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent implements OnInit {



  Empleado: any = [];

  constructor(private apiService: ApiService) {
    this.readEmp();
  }

  readEmp(){
    this.apiService.getEmpleados().subscribe((data)=>{
      this.Empleado = data;
    })
  }

  removeEmpleado(serv : any, index: any){
    if(window.confirm('Estas seguro de realizar esta acción?')){
      this.apiService.deleteEmpleado(serv._id).subscribe((data)=>{
        this.Empleado.splice(index, 1);
      })
    }
  }

  ngOnInit(): void {
  }

}
