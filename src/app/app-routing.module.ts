import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioCreateComponent } from './components/usuario-create/usuario-create.component';
import { UsuarioEditComponent } from './components/usuario-edit/usuario-edit.component';
import { UsuarioListComponent } from './components/usuario-list/usuario-list.component';

import {ProductoCreateComponent} from './components/producto-create/producto-create.component';
import {ProductoEditComponent} from './components/producto-edit/producto-edit.component';
import { ProductoListComponent } from './components/producto-list/producto-list.component';

import { ServicioCreateComponent } from './components/servicio-create/servicio-create.component';
import { ServicioEditComponent } from './components/servicio-edit/servicio-edit.component';
import { ServicioListComponent } from './components/servicio-list/servicio-list.component';

import { EmpleadoCreateComponent } from './components/empleado-create/empleado-create.component';
import { EmpleadoEditComponent } from './components/empleado-edit/empleado-edit.component';
import { EmpleadoListComponent } from './components/empleado-list/empleado-list.component';

import  {InicioComponent} from './components/inicio/inicio.component'

const routes: Routes = [

{path: '' , pathMatch: 'full', redirectTo : 'inicio'}, 
{path:  'create-usuario', component: UsuarioCreateComponent}, 
{path: 'edit-usuario/:id', component: UsuarioEditComponent}, 
{path: 'usuarios-list', component: UsuarioListComponent},
{path: 'create-producto', component: ProductoCreateComponent},
{path: 'edit-producto/:id', component: ProductoEditComponent},
{path: 'producto-list', component: ProductoListComponent},
{path: 'create-servicio', component: ServicioCreateComponent},
{path: 'edit-servicio/:id', component: ServicioEditComponent},
{path: 'servicio-list', component: ServicioListComponent},
{path: 'create-empleado', component: EmpleadoCreateComponent},
{path: 'edit-empleado/:id', component:EmpleadoEditComponent},
{path: 'empleado-list', component: EmpleadoListComponent },
{path: 'inicio', component: InicioComponent}
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
