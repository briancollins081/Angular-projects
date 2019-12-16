import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements = [
    {type: 'server', name:'Test server v.1', content: 'It has grossed $930 million worldwide, had the highest all-time worldwide opening for an animated film, and is the thirteenth highest-grossing animated film of time and the eighth highest-grossing film of 2019.'},
    {type: 'blueprint', name:'Test server blueprint v.1', content: 'It has grossed $930 million worldwide, had the highest all-time worldwide opening for an animated film, and is the thirteenth highest-grossing animated film of time and the eighth highest-grossing film of 2019.'}
  ];
  
  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverBlueprintData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverBlueprintData.serverName,
      content: serverBlueprintData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name = "Name Changed now!";
  }
  onDestroyFirst(){
    this.serverElements.splice(0,1);
  }
}
