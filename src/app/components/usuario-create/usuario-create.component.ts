import { Component, OnInit , NgZone} from '@angular/core';
import {ApiService} from './../../service/api.service'; 
import {Router} from '@angular/router'; 
import {FormGroup,  FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.css']
})
export class UsuarioCreateComponent implements OnInit {



  submitted = false; 
  userForm! : FormGroup; 
  UserType: any = ['Administrador', 'Full', 'Sistemas', 'Cajero']


  constructor(
    public fb : FormBuilder, 
    private router : Router, 
    private ngZone : NgZone, 
    private apiService : ApiService
  ) { 
   this.mainForm();
  }

  ngOnInit(): void {
  }

  mainForm(){
    this.userForm = this.fb.group({
      name : ['', [Validators.required]], 
      email : ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]], 
      tipo : ['', [Validators.required]], 
      numeroTelefonico : ['', [Validators.required, Validators.pattern('^[0-9]+$')]]
    })
   
  }

  updatedType( e: any){
    this.userForm.get('tipo')?.setValue( e, {
      onlySelf : true
    })
    
  }

  get myForm(){
    return this.userForm.controls; 
  }

  onSubmit() {
    this.submitted = true;
    if (this.userForm.invalid) {
      alert('Verifica datos');
      return false;
    } else {
      console.log('Entra aqui');
      console.log(this.userForm.value);
      this.apiService.createUsuario(this.userForm.value).subscribe(
     
        (res) => {
          console.log('User successfully created!')
          console.log(res);
          this.ngZone.run(() => this.router.navigateByUrl('/usuarios-list'))
        }, (error) => {
          console.log(error);
          
        });
      
    }

    return console.log(this.submitted ); 
  }

}
