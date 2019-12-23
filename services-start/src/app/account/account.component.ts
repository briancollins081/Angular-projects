import { Component,Input } from '@angular/core';

import { LoggingService } from '../logging.service';
import { AccountService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountService: AccountService){}

  onSetTo(status: string) {
    this.accountService.updateAccountStatus(this.id, status);
  }
}
