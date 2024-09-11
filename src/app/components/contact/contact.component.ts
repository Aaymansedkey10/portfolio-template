import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';


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
// function for sending the message 
  async sendMessage(){
    emailjs.init("Ykreg4loTWs4uThbC");
    if (this.contactForm.invalid) {
      Swal.fire({
        title: "Error!",
        text: "Please fill all the fields",
        icon: "error"
      });
      return;
    }
    try {
      let response = await emailjs.send("service_k3yfg9b","template_ys1c36v",{
        from_name: this.contactForm.value.from_name,
        to_name: this.contactForm.value.to_name,
        from_email: this.contactForm.value.from_email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
      });
      if (response.status === 200) {
        Swal.fire({
          title: "Good job!",
          text: "Your message sent successfully!",
          icon: "success"
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong! Try again."
        });
      }
  
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong! Try again."
      });
    }
  }
  
}