import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipeedit',
  templateUrl: './recipeedit.component.html',
  styleUrls: ['./recipeedit.component.css']
})
export class RecipeeditComponent implements OnInit {
  id: number;
  editMode: boolean = false;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute
      .params
      .subscribe((params:Params)=>{
        this.id = +params['id'];
        this.editMode = (params['id'] != null);
        console.log(this.editMode);
      })
  }

}
