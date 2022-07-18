import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-direcives-demo-one',
  templateUrl: './direcives-demo-one.component.html',
  styleUrls: ['./direcives-demo-one.component.css']
})
export class DirecivesDemoOneComponent implements OnInit {

  constructor() { }

  isCreated = false;
  ngOnInit(): void {
     this.isCreated = true;
  }

}
