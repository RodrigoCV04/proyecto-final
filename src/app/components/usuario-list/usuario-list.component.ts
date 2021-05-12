import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';


@Component({
  selector: 'app-usuario-list',
  templateUrl: './usuario-list.component.html',
  styleUrls: ['./usuario-list.component.css']
})
export class UsuarioListComponent implements OnInit {


  Usuario:any = [];

  constructor(private apiService: ApiService) { 
    this.readUser();
  }

  readUser(){
    this.apiService.getUsuarios().subscribe((data) => {
     this.Usuario = data;
    })    
  }

  removeUser(usuario : any, index: any) {
    if(window.confirm('Are you sure?')) {
        this.apiService.deleteUsuario(usuario._id).subscribe((data) => {
          this.Usuario.splice(index, 1);
        }
      )    
    }
  }
 

  ngOnInit(): void {
  }

}
