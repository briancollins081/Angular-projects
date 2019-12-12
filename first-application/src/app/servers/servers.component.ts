import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  hideButton=false;
  allowNewServer = false;
  serverCreationStatus = 'No Server Was Created!';
  serverCreated=false;
  serverName = "ABC Server";

  detailsButtonClicks;
  animalName="";

  servers = ["Test Server 1", "Test Server 2"];

  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    }, 5000);
    this.detailsButtonClicks=0;
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated=true;
    this.serverCreationStatus = 'Server was created! Server Name: '+this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event:Event){
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  resetAnimalName(){
    this.animalName="";
  }
}
