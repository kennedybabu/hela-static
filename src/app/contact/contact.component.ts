import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  contactForm = new FormGroup({
   name: new FormControl('', [
    Validators.required,
    Validators.minLength(1)
   ]),
   email: new FormControl('', [Validators.required, Validators.email]),
   phone: new FormControl(''),
   message: new FormControl('', [Validators.required, Validators.minLength(5)])
  })

  constructor(){

  }

  ngOnInit(){ 

  }

  onSubmit(){
    
  }

  get name(){
    return this.contactForm.get('name')
  }

  get email(){
    return this.contactForm.get('email')
  }

  get message(){
    return this.contactForm.get('message')
  }

}
