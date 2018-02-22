import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  @Input() searchText: string = '';
  @Output() onInputChange: EventEmitter<string> = new EventEmitter<string>();

  constructor( ) { }

  ngOnInit() { }

  search() {
    this.onInputChange.emit(this.searchText);
  }

}
