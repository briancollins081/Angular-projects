import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';

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
      'pname': new FormControl(null, [Validators.required, this.forbiddenProjectNames.bind(this)]),
      'pemail': new FormControl(null, [Validators.required, Validators.email]),
      'pstatus': new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.projectRegForm);
    // this.projectRegForm.reset();
  }

  // Custom Validator
  forbiddenProjectNames(control: FormControl): { [s: string]: boolean } {
    const namesArray = this.forbiddenProjectName.map(fn => {
      return fn.toLowerCase();
    });

    let cValue = control.value;
    if (cValue) cValue = cValue.toLowerCase();

    if (namesArray.indexOf(cValue) != -1) {
      return { 'projectNameIsForbidden': true };
    } else {
      return null;
    }
  }

  //Asynchronous Validator
  forbiddenProjectNamesAsync(control: FormControl): Promise<any> | Observable<any> {
    const namesArray = this.forbiddenProjectName.map(fn => {
      return fn.toLowerCase();
    });

    let cValue = control.value;
    if (cValue) cValue = cValue.toLowerCase();

    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(()=>{
        if(namesArray.indexOf(cValue) != -1){
          resolve({'projectNameIsForbidden': true});
        }else{
          resolve(null);
        }
      },2500);
    });
    return promise;
  }

}
