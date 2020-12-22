import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'root',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {
    title:string="Welcome to my first component@"
  constructor() { }

  ngOnInit(): void {

  }

}
