import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable()
export class UsersService {
    activeUsers: string[] = ['Bobby', 'Luke', 'Mikey', 'Antonio'];
    inactiveUsers: string[] = ['Charles','David','Damian','Smoke'];

    constructor(private counterService: CounterService){}

    getActiveUsers():string[]{
        return this.activeUsers;
    }

    getInactiveUsers():string[]{
        return this.inactiveUsers;
    }

    addActiveUser(newUser: string){
        this.activeUsers.push(newUser);
    }

    addInactiveUser(newUser: string){
        this.inactiveUsers.push(newUser);
    }

    removeActiveUser(id: number){
        this.activeUsers.splice(id, 1);
    }

    removeInactiveUser(id: number){
        this.inactiveUsers.splice(id, 1);
    }
    
    setToActive(id: number){
        this.addActiveUser(this.getInactiveUsers()[id]);
        this.removeInactiveUser(id);
        this.counterService.countInactiveToActiveMigration();
    }

    setToInactive(id: number){
        this.addInactiveUser(this.getActiveUsers()[id]);
        this.removeActiveUser(id);
        this.counterService.countActiveToInactiveMigration();
    }
}