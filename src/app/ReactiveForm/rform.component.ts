import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RFormComponent implements OnInit {

  reactiveForm: FormGroup;
  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.reactiveForm = this._fb.group({
      firstName: [null,[Validators.required,Validators.minLength(4)]],
      lastName:[null,[Validators.required,Validators.minLength(4)]],
      gender:[null,Validators.required],
      streetAddress:[null,Validators.required],
      country:[null,Validators.required],
      city:[null,Validators.required],
    });
  }

  pressedBtn = false;

 get firstName(){return this.reactiveForm.controls.firstName;}
 get lastName(){return this.reactiveForm.controls.lastName;}
 get gender(){return this.reactiveForm.controls.gender;}
 get streetAddress(){ return this.reactiveForm.controls.streetAddress;}
 get country(){return this.reactiveForm.controls.country; }
 get city(){return this.reactiveForm.controls.city;}

 frName;
 lsName;
 gende;
 streetA;
 coutry;
 cit;

  Submit()
  {
    this.pressedBtn = true;
  this.frName = this.firstName.value;
  this.lsName = this.lastName.value;
  this.gende = this.gender.value;
  this.streetA = this.streetAddress.value;
  this.coutry = this.country.value;
 if(this.coutry == "1"){ this.coutry = "Morocco"; }
 else { this.coutry = "USA"; }
  this.cit = this.city.value;
    
  }

}
