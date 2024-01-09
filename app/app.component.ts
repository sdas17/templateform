import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularform';
  userdemo:{username:string}={username:''}
  submitForm(myForm:NgForm){
    if (myForm.valid) {
      alert(this.userdemo.username)
console.log('sucessfully sumbitted',this.userdemo.username,myForm);

    }
  }
user: string = '';
email: string = '';
selectedCountry: string = '';
city: string = '';

countries = [
  {name: 'USA', value: 'usa'},
  {name: 'Canada', value: 'canada'},
  {name: 'UK', value: 'uk'},
];
cities:{[key:string]:string[]}={
  usa: ['New York', 'Los Angeles', 'Chicago'],
  canada: ['Toronto', 'Vancouver', 'Montreal'],
  uk: ['London', 'Manchester', 'Birmingham'],
}
  getCitiesByCountry(country: string): string[]{
    return this.cities[country] || [];
  }
onSubmit(myForm: NgForm){
  if(myForm.valid){
    const formData = {
      user: this.user,
      email: this.email,
      country: this.selectedCountry,
      city: this.city,
    };
    console.log('Form Submitted', formData);
  }else{
    alert('Please fill up the fields');
  }
}



}
