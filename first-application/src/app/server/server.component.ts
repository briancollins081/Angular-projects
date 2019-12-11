import { Component } from "@angular/core";

@Component(
    {
        selector:"app-server",
        templateUrl: "./server.component.html"
    }
)
export class ServerComponent{
    serverId = 56774399028;
    serverStatus = "Online: Running";

    getServerStatus(){
        return this.serverStatus;
    }
}