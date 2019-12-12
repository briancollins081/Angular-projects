import { Component } from "@angular/core";

@Component(
    {
        selector:"app-server",
        templateUrl: "./server.component.html",
        styles: [`
            .online{
                color:white;
            }
            .textwhite{
                color:white;
            }
        `]
    }
)
export class ServerComponent{
    serverId = 56774399028;
    serverStatus = "Online: Running";
    statusValues = ["Online Running","Offline Stopped"];
    showDetails = false;
    displayEvents=[];

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? this.statusValues[0] : this.statusValues[1];
    }

    getServerStatus(){
        return this.serverStatus;
    }

    getColor(){
        return this.getServerStatus() === this.statusValues[0] ? 'green' : 'red';
    }

    checkIfServerOnline(){
        return this.getServerStatus() == this.statusValues[1];
    }

    onShowDetails(e){
        this.displayEvents.push(e);
        this.showDetails=!this.showDetails;
    }
    getBg(element){
        return this.displayEvents.indexOf(element) > 4 ? 'blue' : '';
    }
   whiteTextColor(element){
        return this.displayEvents.indexOf(element) > 4 ? true: false;
    }
}