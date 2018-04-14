import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import 'rxjs/Rx';

@Component({
  selector: 'app-bind2',
  templateUrl: './bind2.component.html',
  styleUrls: ['./bind2.component.css']
})
export class Bind2Component implements OnInit {

   searchInput: FormControl = new FormControl();

  constructor() {
    this.searchInput.valueChanges.debounceTime(500)
      .subscribe(
      stockCode => this.getStockCode(stockCode)
    );
  }

  ngOnInit() {
  }

  onKey(field: String) {
    console.log(field);
  }

  getStockCode(value: String) {
    console.log(value);
  }
}
