import { EmployeeService } from './../../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/model/employee.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
id: number;
header : string;
employee: Employee ={
  id: 0,
  name: '',
  position: '',
  email: '',
  joining_date: 0,
  phone: 0,
  about: '',
  
}

  constructor(private router:Router, private route: ActivatedRoute , private employeeService:EmployeeService) { }

  ngOnInit(): void {
   this.id = +this.route.snapshot.paramMap.get('id');
this.header = this.id === 0? 'Add Employee' : 'edit Employee';

if(this.id !=0){
  this.employee = this.employeeService.onGetEmployee(this.id);
}
}

  onSubmit(form : NgForm){
    //console.log(form.value);
    
    let employee: Employee = {
      id: form.value.id,
      name: form.value.name,
      position:form.value.position,
      email: form.value.email,
      joining_date: form.value.joining_date,
      phone: form.value.phone,
      about: form.value.about
    }
    if(this.id===0){
      this.employeeService.onAdd(employee);
    }
    else{
     this.employeeService.onUpdate(employee);
    }
    

    this.router.navigateByUrl('')
  }

}
