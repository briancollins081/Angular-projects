import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {
  @ViewChild('f', {static: true}) projectForm: NgForm;

  constructor() { }

  ngOnInit() {
  }

  get f (){
    return this.projectForm.form.controls;
  }

  onSubmit(){
    console.log(this.projectForm);
    
  }
}
