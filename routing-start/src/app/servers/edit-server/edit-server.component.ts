import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { CanComponentDeactivate } from './can-deactivate.guard';
import { Observable } from 'rxjs';
import Swal from "sweetalert2";

@Component({
  selector: 'app-edit-server',
  templateUrl: './edit-server.component.html',
  styleUrls: ['./edit-server.component.css']
})
export class EditServerComponent implements OnInit, CanComponentDeactivate {
  server: { id: number, name: string, status: string };
  serverName = '';
  serverStatus = '';
  allowEdit = false;
  changesSaved: boolean = false;

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    /* console.log(this.activatedRoute.snapshot.queryParams);
    console.log(this.activatedRoute.snapshot.fragment); */
    this.activatedRoute.queryParams.subscribe(
      (qp: Params) => {
        this.allowEdit = qp['allowEdit'] === '1' ? true : false;
      }
    )
    let serverId = 1;
    this.activatedRoute.params.subscribe(p => {
      serverId = +p.id;
      this.server = this.serversService.getServer(serverId);
      console.log(this.server);
    });

    this.activatedRoute.fragment.subscribe();
    this.serverName = this.server.name;
    this.serverStatus = this.server.status;
  }



  onUpdateServer() {
    this.serversService.updateServer(this.server.id, { name: this.serverName, status: this.serverStatus });
    this.changesSaved = true;
    this.router.navigate(['../'], { relativeTo: this.activatedRoute })
  }

  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if ((this.serverName !== this.server.name || this.serverStatus !== this.server.status) && !this.changesSaved) {
      return confirm("The changes you made are going to be discarded! continue?");
    } else {
      return true;
    }
  }

}
