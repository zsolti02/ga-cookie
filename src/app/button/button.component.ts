import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {
  // @Output() onClick = new EventEmitter<boolean>();
  // Click() {
  //   this.onClick.emit(true);
  // }

  constructor() {}

  ngOnInit(): void {}
  
}
