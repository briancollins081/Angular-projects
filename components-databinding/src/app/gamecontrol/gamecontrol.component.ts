import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Input('incrNo') incrementingNumber = 0;
  @Output('onInterval') onInterval = new EventEmitter<{number: Number}>();
  
  timerEvent = window.setInterval(()=>{
    this.incrementingNumber+1;
    this.onInterval.emit({
      number: this.incrementingNumber
    });
    console.log(this.incrementingNumber);
  },1000)

  constructor() { }

  ngOnInit() {
  }

  startTheGame(){
    return window.setInterval(()=>{
      this.onInterval.emit({
        number: this.incrementingNumber+1
      });
      console.log(this.incrementingNumber);
    }, 1000);
  }
  
  stopTheGame(){
    let t=this.startTheGame();
    window.clearInterval(t);
  }

}
