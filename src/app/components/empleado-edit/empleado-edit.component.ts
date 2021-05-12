import { Component, OnInit } from '@angular/core';
import {ApiService} from './../../service/api.service'; 
import {ActivatedRoute,Router} from '@angular/router'; 
import {FormGroup,  FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
import { Empleado } from 'src/model/empleado.model';

@Component({
  selector: 'app-empleado-edit',
  templateUrl: './empleado-edit.component.html',
  styleUrls: ['./empleado-edit.component.css']
})
export class EmpleadoEditComponent implements OnInit {

  submitted = false; 
  editEmpForm! : FormGroup; 
  userData! : Empleado[]; 

  constructor(
    public fb : FormBuilder, 
    private actRoute : ActivatedRoute, 
    private apiService : ApiService,
    private router : Router
  ) {

  }

  ngOnInit(): void {
    this.updateEmpleado();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getEmpleado(id);
    this.editEmpForm = this.fb.group({
      firstName : ['', [Validators.required]],
      lastName : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      dep : ['', [Validators.required]],
      rfc : ['', [Validators.required]]
    })
  }

  getEmpleado(id: any){
    this.apiService.getEmpleado(id).subscribe(data =>{
      this.editEmpForm.setValue({
        firstName : data.firstName,
        lastName : data.lastName,
        email : data.email,
        dep : data.dep,
        rfc : data.rfc
      })
    })
  }

  updateEmpleado(){
    this.editEmpForm = this.fb.group({
      firstName : ['', [Validators.required]],
      lastName : ['', [Validators.required]],
      email : ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]],
      dep : ['', [Validators.required]],
      rfc : ['', [Validators.required]]
    })
  }

  get myForm(){
    return this.editEmpForm.controls;
  }

  onSubmitEditE(){
    this.submitted = true;
    if(!this.editEmpForm.valid){
      alert('Verifica datos');
      return false;
    }else{
      if(window.confirm('Estas seguro?')){
        console.log(this.editEmpForm.value);
        let form = this.editEmpForm.value;

        console.log("AQUI")
        console.log(form);
        let id = this.actRoute.snapshot.paramMap.get('id');
        console.log(id);
        this.apiService.updateEmpleado(id, form)
        .subscribe(res =>{
          console.log(res);
          this.router.navigateByUrl('/empleado-list');
          console.log('Editado!')
        },(error) =>{
          console.log(error)
        })
      }
      return true;
    }
  }

}
