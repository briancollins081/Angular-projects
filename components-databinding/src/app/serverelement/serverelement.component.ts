import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.css']
})
export class ServerelementComponent implements OnInit {
  @Input('svrElement') sElement: {type: string, name: string, content:string};
  constructor() { }

  ngOnInit() {
  }

}
