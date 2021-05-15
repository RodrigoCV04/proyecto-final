import { Component, OnInit } from '@angular/core';
import {ApiService} from './../../service/api.service'; 
import {ActivatedRoute,Router} from '@angular/router'; 
import {FormGroup,  FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
import { Servicio } from 'src/model/servicio.model';

@Component({
  selector: 'app-servicio-edit',
  templateUrl: './servicio-edit.component.html',
  styleUrls: ['./servicio-edit.component.css']
})
export class ServicioEditComponent implements OnInit {

  submitted = false;
  editServForm! : FormGroup;
  ServData! : Servicio[];


  constructor(
    public fb : FormBuilder,
    private actRoute : ActivatedRoute, 
    private apiService : ApiService,
    private router : Router
  ) {

  }

  ngOnInit(){
    this.updateServicio();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getServicio(id);
    this.editServForm = this.fb.group({
      num : ['', [Validators.required]],
      nameServ : ['', [Validators.required]],
      descServ : ['', [Validators.required]],
      unidServ : ['', [Validators.required]],
      precioServ : ['', [Validators.required]],
    })
  }

  getServicio(id:any){
    this,this.apiService.getServicio(id).subscribe(data =>{
      this.editServForm.setValue({
        num : data.num,
        nameServ : data.nameServ,
        descServ : data.descServ,
        unidServ : data.unidServ,
        precioServ : data.precioServ
      });
    });
  }

  updateServicio(){
    this.editServForm = this.fb.group({
      num : ['', [Validators.required]],
      nameServ : ['', [Validators.required]],
      descServ : ['', [Validators.required]],
      unidServ : ['', [Validators.required]],
      precioServ : ['', [Validators.required]],
    })
  }

  get myForm(){
    return this.editServForm.controls;
  }

  onSubmitEditS(){
    this.submitted =true;
    if(!this.editServForm.valid){
      return false;
    }else{
      if(window.confirm('Estas seguro?')){
        console.log(this.editServForm.value);
        let form = this.editServForm.value;

        console.log("AQUI")
        console.log(form);
        let id = this.actRoute.snapshot.paramMap.get('id');
        console.log(id);
        this.apiService.updateServicio(id, form)
        .subscribe(res =>{
          console.log(res);
          this.router.navigateByUrl('/servicio-list');
          console.log('Editado!')
        }, (error)=>{
          console.log(error)
        })
      }
      return true;
    }
  }

}
