import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers: [],
})
export class ContactComponent {
  contactForm:FormGroup ;
  constructor(private fb:FormBuilder) {
    this.contactForm = this.fb.group({
      from_name: ['', Validators.required],
      to_name: ['Admin'],
      from_email: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required],
    });
  }


  async sendMessage(){
    emailjs.init("Ykreg4loTWs4uThbC")
    let response = await emailjs.send("service_k3yfg9b","template_ys1c36v",{
      from_name:this.contactForm.value.from_name,
      to_name: this.contactForm.value.to_name,
      from_email: this.contactForm.value.from_email,
      subject: this.contactForm.value.subject,
      message: this.contactForm.value.message,
      });
      console.log(this.contactForm.value)
      if(response.status == 200){
        alert("Message sent successfully")
      }
      else{
        alert("Something went wrong")
      }
      console.log(response)
  }
}
  // get name() { return this.contactForm.get('name');}
  // get email() { return this.contactForm.get('email');}
  // get subject() { return this.contactForm.get('subject');}
  // get message() { return this.contactForm.get('message');}