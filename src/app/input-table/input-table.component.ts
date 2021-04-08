import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-table',
  templateUrl: './input-table.component.html',
  styleUrls: ['./input-table.component.css']
})
export class InputTableComponent implements OnInit {

  @Input()
  username: any;

  userOfList: Array<String> = [];

  constructor() { }


  addNewUser() {
    this.userOfList.push(this.username);
    console.log(this.userOfList);
    this.username = "";

  }

  ngOnInit(): void {
  }

}


