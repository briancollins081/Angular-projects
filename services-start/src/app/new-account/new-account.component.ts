import { Component } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [AccountService]
})
export class NewAccountComponent {
  
  constructor(private logginService: LoggingService, 
    private accountService: AccountService){}
  
  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addNewAccount(accountName, accountStatus);
    this.logginService.logStatusChange(accountStatus);
  }
}
