import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  interval; //reference to hold our timer event
  intervalNumber=0;
  @Output() startedGameEvent = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }

  startGame(){
    this.interval = setInterval(()=>{
      this.startedGameEvent.emit(this.intervalNumber);
      this.intervalNumber++;
    }, 1000);
  }

  stopGame(){
    clearInterval(this.interval);
    this.intervalNumber=0;
  }

  pauseGame(){
    clearInterval(this.interval);
  }

}
