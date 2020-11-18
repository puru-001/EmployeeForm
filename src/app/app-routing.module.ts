import { EditComponent } from './pages/employees/edit/edit.component';
import { EmployeesComponent } from './pages/employees/employees.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"",
  component:EmployeesComponent
  },
  {
    path: "**",
    redirectTo: "EditComponent"
  },
  {
    path: "employee/add/:id",
    component:EditComponent
  },
  {
    path: "employee/edit/:id",
    component:EditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
