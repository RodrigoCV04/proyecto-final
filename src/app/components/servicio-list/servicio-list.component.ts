import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-servicio-list',
  templateUrl: './servicio-list.component.html',
  styleUrls: ['./servicio-list.component.css']
})
export class ServicioListComponent implements OnInit {



  Servicio:any = [];

  constructor(private apiService: ApiService) {
    this.readServ();
  }

  readServ(){
    this.apiService.getServicios().subscribe((data) =>{
      this.Servicio = data;
    })
  }

  removeServicio(serv : any, index: any){
    if(window.confirm('Estás seguro de realizar esta acción?')){
      this.apiService.deleteServicio(serv._id).subscribe((data)=>{
        this.Servicio.splice(index, 1);
      })
    }
  }

  ngOnInit(): void {
  }

}
