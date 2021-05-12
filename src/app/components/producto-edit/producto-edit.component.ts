import { Component, OnInit } from '@angular/core';
import {ApiService} from './../../service/api.service'; 
import {ActivatedRoute,Router} from '@angular/router'; 
import {FormGroup,  FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms'
import { Producto } from 'src/model/producto.model';


@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.component.html',
  styleUrls: ['./producto-edit.component.css']
})
export class ProductoEditComponent implements OnInit {

  submitted = false;
  editProdForm! : FormGroup;
  ProductData! : Producto[];



  constructor(
    public fb : FormBuilder,
    private actRoute : ActivatedRoute, 
    private apiService : ApiService,
    private router : Router 
  ) {

  }

  ngOnInit(){
    this.updateProducto();
    let id = this.actRoute.snapshot.paramMap.get('id');
    this.getProducto(id);
    this.editProdForm = this.fb.group({
      id : ['', [Validators.required]],
      nameProduct : ['', [Validators.required]],
      descProduct : ['', [Validators.required]],
      precioProduct : ['', [Validators.required]],
      cantProduct : ['', [Validators.required]]

    })
  }

  getProducto(id: any){
    this.apiService.getProducto(id).subscribe(data =>{
      this.editProdForm.setValue({
        id: data.id, 
        nameProduct : data.nameProduct,
        descProduct : data.descProduct,
        precioProduct : data.precioProduct,
        cantProduct : data.cantProduct
      });
    });
  }

  updateProducto(){
    this.editProdForm = this.fb.group({
      id : ['', [Validators.required]],
      nameProduct : ['', [Validators.required]],
      descProduct : ['', [Validators.required]],
      precioProduct : ['', [Validators.required]],
      cantProduct : ['', [Validators.required]]
    })
  }

  get myForm(){
    return this.editProdForm.controls;
  }

  onSubmitEditP(){
    this.submitted = true;
    if (!this.editProdForm.valid){
      return false;
    }else{
      if (window.confirm('Estas seguro?')) {
        console.log(this.editProdForm.value); 
        let form = this.editProdForm.value;
        
        console.log("AQUI")
        console.log(form);
        let id = this.actRoute.snapshot.paramMap.get('id');
        console.log(id); 
        this.apiService.updateProducto(id, form)
          .subscribe(res => {
            console.log(res);
            this.router.navigateByUrl('/producto-list');
            console.log('Editado!')
          }, (error) => {
            console.log(error)
          })
         
      }
      return true;
    }
  }

}
