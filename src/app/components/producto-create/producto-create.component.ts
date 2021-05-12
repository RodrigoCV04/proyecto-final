import { Component, OnInit , NgZone } from '@angular/core';
import {ApiService} from './../../service/api.service'; 
import {Router} from '@angular/router'; 
import {FormGroup,  FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.component.html',
  styleUrls: ['./producto-create.component.css']
})
export class ProductoCreateComponent implements OnInit {



  submitted = false;
  productForm! : FormGroup;



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
    this.productForm = this.fb.group({
      id : ['', [Validators.required]],
      nameProduct : ['', [Validators.required]],
      descProduct : ['', [Validators.required]],
      precioProduct : ['', [Validators.required]],
      cantProduct : ['', [Validators.required]]
    })

  }

  get myForm(){
    return this.productForm.controls; 
  }

  onSubmit() {
    this.submitted = true;
    if (this.productForm.invalid) {
      alert('Verifica datos');
      return false;
    } else {
      console.log('Entra aqui');
      console.log(this.productForm.value);
      this.apiService.createProducto(this.productForm.value).subscribe(
     
        (res) => {
          console.log('Product successfully added!')
          console.log(res);
          this.ngZone.run(() => this.router.navigateByUrl('/producto-list'))
        }, (error) => {
          console.log(error);
          
        });
      
    }

    return console.log(this.submitted ); 
  }

}
