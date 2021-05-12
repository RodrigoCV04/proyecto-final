import { Component, OnInit } from '@angular/core';
import {ApiService} from './../../service/api.service'; 
import {ActivatedRoute,Router} from '@angular/router'; 
import {FormGroup,  FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
import { Usuario } from 'src/model/usuario.model';


@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

  submitted = false; 
  editForm! : FormGroup; 
  userData! : Usuario[]; 
  UserType: any = ['Administrador', 'Full', 'Sistemas', 'Cajero']


  constructor(
    public fb : FormBuilder, 
    private actRoute : ActivatedRoute, 
    private apiService : ApiService,
    private router : Router
  ) {   
  
  }


  ngOnInit() {
    this.updateUser();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getUsuario(id);
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      tipo: ['', [Validators.required]],
      numeroTelefonico: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }

  getUsuario(id: any) {
    this.apiService.getUsuario(id).subscribe(data => {
      this.editForm.setValue({
        name: data['name'],
        email: data['email'],
        tipo: data['tipo'],
        numeroTelefonico: data['numeroTelefonico']
      });
    });
  }

  updateUser() {
    this.editForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      tipo: ['', [Validators.required]],
      numeroTelefonico: ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
  }



  updatedType( e: any){
    this.editForm.get('tipo')?.setValue( e, {
      onlySelf : true
    })
    
  }

  get myForm(){
    return this.editForm.controls; 
  }

  onSubmitEdit() {
    this.submitted = true;
    if (!this.editForm.valid) {
      alert('Verifica datos');
      return false;
    } else {
      if (window.confirm('Estas seguro?')) {
        console.log(this.editForm.value); 
        let form = this.editForm.value;
        
        console.log("AQUI")
        console.log(form);
        let id = this.actRoute.snapshot.paramMap.get('id');
        console.log(id); 
        this.apiService.updateUsuario(id, form)
          .subscribe(res => {
            console.log(res);
            this.router.navigateByUrl('/usuarios-list');
            console.log('Editado!')
          }, (error) => {
            console.log(error)
          })
         
      }
      return true;
    }
  }


}
