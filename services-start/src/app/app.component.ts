import { Component, OnInit } from '@angular/core';
import { AccountService } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountService]
})
export class AppComponent implements OnInit{

  accounts: {name: string, status:string}[] = [];
  
  constructor(private accountService: AccountService){}

  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }
  
  onAccountAdded(name: string, status: string) {
    this.accountService.addNewAccount(name, status);
  }

  // onStatusChanged(updateInfo: {id: number, newStatus: string}) {
  //   this.accounts[updateInfo.id].status = updateInfo.newStatus;
  // }
} 
