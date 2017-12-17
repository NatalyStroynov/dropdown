import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import {User} from '../modelform/user'


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form:FormGroup;
  user:User;

  constructor(private fb: FormBuilder) {
    this.user = new User();
    this.user.firstname="Nata";
    this.user.lastname="Str";
    this.user.country="israel";
    this.user.bankname="Discount";
    this.user.branchnum=55;
    this.user.firm="Myfirm";

   }

  ngOnInit() {
    this.form=this.fb.group({
      firstname:[this.user.firstname],
      lastname:[this.user.lastname],
      country:[this.user.country],
      bankname:[this.user.bankname],
      branchnum:[this.user.branchnum],
      firm:[this.user.firm]
    })

    
  }

}
