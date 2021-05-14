import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioCreateComponent } from './components/usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './components/usuario-edit/usuario-edit.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';
import { ApiService} from './service/api.service'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductoCreateComponent } from './components/producto-create/producto-create.component';
import { ProductoEditComponent } from './components/producto-edit/producto-edit.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';
import { ServicioCreateComponent } from './components/servicio-create/servicio-create.component';
import { ServicioListComponent } from './components/servicio-list/servicio-list.component';
import { ServicioEditComponent } from './components/servicio-edit/servicio-edit.component';
import { EmpleadoCreateComponent } from './components/empleado-create/empleado-create.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';
import { EmpleadoEditComponent } from './components/empleado-edit/empleado-edit.component';
import { InicioComponent } from './components/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioCreateComponent,
    UsuarioEditComponent,
    UsuarioListComponent,
    ProductoCreateComponent,
    ProductoEditComponent,
    ProductoListComponent,
    ServicioCreateComponent,
    ServicioListComponent,
    ServicioEditComponent,
    EmpleadoCreateComponent,
    EmpleadoListComponent,
    EmpleadoEditComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
