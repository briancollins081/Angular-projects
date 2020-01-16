import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'game-events-exercise';

  noComponents = 0;

  oddElements: number[] = [];
  evenElements: number[] = [];

  onStartedGameEvent(increamentingValue: number){
    console.log(increamentingValue);
    this.noComponents=increamentingValue;
    
    if(increamentingValue%2 == 0){
      this.evenElements.push(increamentingValue);
    }else{
      this.oddElements.push(increamentingValue);
    }
  }


}
