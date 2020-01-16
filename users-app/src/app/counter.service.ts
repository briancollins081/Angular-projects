export class CounterService {
  activeToInactiveCounter: number = 0;
  inactiveToActiveCounter: number = 0;
  constructor() { }

  countActiveToInactiveMigration(){
    this.activeToInactiveCounter++;
    console.log('Active to Inactive '+this.activeToInactiveCounter);
  }

  countInactiveToActiveMigration(){
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active '+this.inactiveToActiveCounter);
  }
}
