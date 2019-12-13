import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdform',
  templateUrl: './tdform.component.html',
  styleUrls: ['./tdform.component.css']
})
export class TDFormComponent implements OnInit {

  constructor() { }
  user = {
    'firstName' : '',
    'lastName':'',
    'Gender':'',
    'streetAddress':'',
    'Country':'',
    'City':''
  };
  buttonPressed = false;

  ngOnInit() {
  }
  submitHandler(myForm: NgForm)
  {
    this.user.firstName = myForm.form.controls['firstName'].value;
    this.user.lastName = myForm.form.controls['lastName'].value;
    this.user.Gender =  myForm.form.controls['Gender'].value;
    this.user.streetAddress = myForm.form.controls['streetAddress'].value;
    this.user.Country = myForm.form.controls['Country'].value;
    if(this.user.Country === '1'){ this.user.Country = 'Morocco' }else { this.user.Country = 'USA' }
    this.user.City = myForm.form.controls['city'].value;

    this.buttonPressed = true;

    // console.log(this.user);
    // console.log( "Values is : "+ JSON.stringify( myForm.value));
  }

}
