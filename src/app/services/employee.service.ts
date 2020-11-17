import { Injectable } from '@angular/core';
import { Employee } from '../model/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
employees: Employee[] = [

  {
    id:1,
    name: "Purushottam",
    position: "angular Developer",
    email: "puru@gmail.com",
    joining_date: 11/11/2020,
    phone: 123456778
  },
  {
    id:2,
    name: "Akash",
    position: "Fullstack developer",
    email: "akash@gmail.com",
    joining_date: 11/11/2020,
    phone: 32434543534
  },
];
  constructor() { }

  onGet() {
    return this.employees;
  };

  onGetEmployee(id : Number) {
    return this.employees.find(x=> x.id ===id);
  }

  onAdd(employee : Employee){
    this.employees.push(employee);
  }
  onDelete(id:Number) {
    let employee = this.employees.find(x=>x.id ===id);
    let index = this.employees.indexOf(employee,0);
    this.employees.splice(index,1);
  }

  onUpdate(employee: Employee){
    let oldEmployee = this.employees.find(x=>x.id === employee.id);
    oldEmployee.name = employee.name;
    oldEmployee.position = employee.position;
    oldEmployee.email = employee.email;
    oldEmployee.joining_date = employee.joining_date;
    oldEmployee.phone = employee.phone;
  }
}
