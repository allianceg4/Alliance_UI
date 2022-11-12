import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-add-ticket-form',
  templateUrl: './add-ticket-form.component.html',
  styleUrls: ['./add-ticket-form.component.css']
})
export class AddTicketFormComponent implements OnInit {

  constructor() { }


  onSubmit(myForm: NgForm) {
  
    console.log(myForm.value);
    console.log(myForm.valid);
      
  }

  setDefault(myForm: NgForm){
    myForm.resetForm({
      name: 'Hardik', 
      email: 'savanihd@gmail.com'
    })
  }

  resetFormValue(myForm: NgForm){
    myForm.resetForm()
  }

  ngOnInit(): void {
  }

}
