import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  oddNumbers: number[] = [1,3,5,7,9];
  evenNumbers: number[] = [2,4,6,8]
  onlyOdd: boolean = false;
}
