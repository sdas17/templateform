import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-from',
  templateUrl: './reactive-from.component.html',
  styleUrls: ['./reactive-from.component.scss']
})
export class ReactiveFromComponent {
  employeeForm: FormGroup;

  constructor(private fb:FormBuilder){
    this.employeeForm = this.fb.group({
      employees:this.fb.array([])
    });
  }

  get employees(): FormArray{
    return this.employeeForm.get('employees') as FormArray;
  }

  addEmployee(): void{
    const employeeGroup = this.fb.group({
      name: [''],
      job: [''],
    });
    this.employees.push(employeeGroup);
  }

  submitForm(){
    console.log(this.employeeForm.value);
  }
}
