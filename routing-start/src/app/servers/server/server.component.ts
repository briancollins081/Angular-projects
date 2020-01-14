import { Component, OnInit } from '@angular/core';

import { ServersService } from '../servers.service';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };

  constructor(
    private serversService: ServersService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.activatedRoute
      .data
      .subscribe(
        (data: Data)=>{
          this.server = data['server'];
        }
      )
    /* let id = 1;
    this.activatedRoute.params.subscribe((p: Params) => {
      if (p.id) {
        id = +p.id;
      }
      this.server = this.serversService.getServer(id);
    }); */
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.activatedRoute, queryParamsHandling: 'merge' })
  }

}
