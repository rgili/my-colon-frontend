import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-range-bar',
  templateUrl: './range-bar.component.html',
  styleUrls: ['./range-bar.component.scss'],
})
export class RangeBarComponent implements OnInit {

  @Input() min : number;
  @Input() max : number;
  @Input() nom : string;

  @Output() rangeValueChange = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  valorSeleccionat(event){
    this.rangeValueChange.emit(event.detail.value);
  }

}
