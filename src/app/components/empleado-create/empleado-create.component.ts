import { Component, OnInit , NgZone} from '@angular/core';
import {ApiService} from './../../service/api.service'; 
import {Router} from '@angular/router'; 
import {FormGroup,  FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-empleado-create',
  templateUrl: './empleado-create.component.html',
  styleUrls: ['./empleado-create.component.css']
})
export class EmpleadoCreateComponent implements OnInit {

  submitted = false;
  empForm! : FormGroup;

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
    this.empForm = this.fb.group({
      firstName : ['', [Validators.required]],
      lastName : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      dep : ['', [Validators.required]],
      rfc : ['', [Validators.required]],
    })
  }

  get myForm(){
    return this.empForm.controls;
  }

  onSubmit(){
    this.submitted = true;
    if(this.empForm.invalid){
      alert('Verifica datos');
      return false;
    }else{
      console.log('Entra aquí');
      console.log(this.empForm.value);
      this.apiService.createEmpleado(this.empForm.value).subscribe(
        (res)=>{
          console.log('Servicio successfully added!');
          console.log(res);
          this.ngZone.run(() => this.router.navigateByUrl('/empleado-list'))
        }, (error) => {
          console.log(error);
        });
    }
    return console.log(this.submitted);
  }

}
