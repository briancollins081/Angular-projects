import { Component, OnInit, Input, OnChanges, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-serverelement',
  templateUrl: './serverelement.component.html',
  styleUrls: ['./serverelement.component.css']
})
export class ServerelementComponent implements 
  OnInit, 
  OnChanges, 
  DoCheck, 
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('svrElement') sElement: { type: string, name: string, content: string };
  @Input() name: string;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);

  }

  ngOnInit() {
    console.log('ngOnInit called');

  }

  ngDoCheck() {
    console.log('ngDoCheck is called!');
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit is called!");
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked is called!");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit is called!");
  }
  ngAfterViewChecked(){
    console.log("ngAfterViewChecked is called!");
  }
  ngOnDestroy(){
    console.log("ngOnDestroy is called!");
  }
}
