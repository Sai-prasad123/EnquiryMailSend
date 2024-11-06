import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-enquiry',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './enquiry.component.html',
  styleUrl: './enquiry.component.css'
})
export class EnquiryComponent {

  enquiryForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.enquiryForm = this.fb.group({
      your_name: ['', [Validators.required , Validators.required]],
      mobile_number: ['', [Validators.required, Validators.required]],
      your_email: ['', [Validators.required , Validators.email]],
      your_subject:['', [Validators.required, Validators.required]],
      your_message:['', [Validators.required, Validators.required]]
    });
  }

  onSubmit(){
    if(this.enquiryForm.valid){
      const {your_name ,mobile_number,your_email,your_subject,your_message } = this.enquiryForm.value;
      const templateParams = {your_name ,mobile_number,your_email,your_subject,your_message };
      // emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams, 'YOUR_USER_ID')
      emailjs.send('service_dqmfro4', 'service_dqmfro4', templateParams, 'YOZ7x_Rgbv-DDAq1O').then((response)=>{
        console.log('Email sent successfully!', response.status, response.text);
      },(error)=>{
        console.error('Failed to send email', error);
      })
    }
  }
}
