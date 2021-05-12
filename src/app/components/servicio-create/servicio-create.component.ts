import { Component, OnInit , NgZone} from '@angular/core';
import {ApiService} from './../../service/api.service'; 
import {Router} from '@angular/router'; 
import {FormGroup,  FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-servicio-create',
  templateUrl: './servicio-create.component.html',
  styleUrls: ['./servicio-create.component.css']
})
export class ServicioCreateComponent implements OnInit {

  submitted = false;
  servForm! : FormGroup;


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
    this.servForm = this.fb.group({
      num : ['', [Validators.required]],
      nameServ : ['', [Validators.required]],
      descServ : ['', [Validators.required]],
      unidServ : ['', [Validators.required]],
      precioServ : ['', [Validators.required]],
    });
   }

   get myForm(){
     return this.servForm.controls;
   }


  onSubmit(){
    this.submitted = true;
    if (this.servForm.invalid){
      alert('Verifica datos');
      return false;
    } else {
      console.log('Entra aquí');
      console.log(this.servForm.value);
      this.apiService.createServicio(this.servForm.value).subscribe(
        (res) =>{
          console.log('Servicio successfully added!');
          console.log(res);
          this.ngZone.run(() => this.router.navigateByUrl('/servicio-list'))
        }, (error) => {
          console.log(error);
        });
    }
    return console.log(this.submitted);
  }

}
