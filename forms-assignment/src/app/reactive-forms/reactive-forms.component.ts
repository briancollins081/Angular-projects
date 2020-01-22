import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  projectRegForm: FormGroup;
  forbiddenProjectName: string[] = ['Test']

  constructor() { }

  ngOnInit() {
    this.projectRegForm = new FormGroup({
      'pname': new FormControl(null, Validators.required),
      'pemail': new FormControl(null, [Validators.required, Validators.email]),
      'pstatus': new FormControl(null, Validators.required)
    });
  }

  onSubmit(){
    console.log(this.projectRegForm);
    // this.projectRegForm.reset();
  }
  

}
