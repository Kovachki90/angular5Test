import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test3',
  templateUrl: './test3.component.html',
  styleUrls: ['./test3.component.css']
})
export class Test3Component implements OnInit {

  public name = 'Ivan Kovachki';
  public message = 'Welcome to ivan evolution';
  public person = {
    'firstName': 'Ivan',
    'lastName': 'Kovachki'
  };
  public date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
