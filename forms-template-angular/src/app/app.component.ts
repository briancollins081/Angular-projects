import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f', { static: true }) form: NgForm;
  defaultQuestion = "teacher";
  secretAns: string = '';
  genders: string[] = ['male', 'female', 'other'];
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: ''
  };
  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';
    /* this.form.setValue({
      userData: {
        username: suggestedName,
        email: ''
      },
      secret: 'pet',
      secretAns: '',
      gender: 'male'
    }); */
    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    })
  }

  /* onSubmit(frm:NgForm){
    console.log(frm); 
  } */

  onSubmit() {
    console.log(this.form);
    this.submitted = true;
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.secretQuestion = this.form.value.secret;
    this.user.answer = this.form.value.secretAns;
    this.user.gender = this.form.value.gender;

    this.form.reset();
  }
}
