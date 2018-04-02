import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bind1',
  templateUrl: './bind1.component.html',
  styleUrls: ['./bind1.component.css']
})
export class Bind1Component implements OnInit {

  name: String;

  constructor() {
    setInterval( () => {
      this.name = '双向绑定练习';
    }, 3000);
  }

  ngOnInit() {
  }

}
