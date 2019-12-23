export class AccountService{
    accounts = [
        {
          name: 'Master Account',
          status: 'active'
        },
        {
          name: 'Testaccount',
          status: 'inactive'
        },
        {
          name: 'Hidden Account',
          status: 'unknown'
        }
      ];

    addNewAccount(name: string, status: string){
        this.accounts.push({name: name, status: status});
    }

    updateAccountStatus(id: number, newStatus: string){
        this.accounts[id].status = newStatus; 
    }
}