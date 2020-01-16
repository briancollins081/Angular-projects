import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css']
})
export class EvenComponent implements OnInit {
  evenComponents: {name:string, value:number}[] = [{
    name: "Even Component Default",
    value: 0
  }];
  constructor() { }

  ngOnInit() {
  }

  onInterval(eventInfo:{value: number}){
    if(eventInfo.value %2 == 0){
      this.evenComponents.push({
        name: "This is an event item#number",
        value: eventInfo.value
      });
    }
  }
}
