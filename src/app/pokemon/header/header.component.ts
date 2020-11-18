import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onChangeMode: EventEmitter<string> = new EventEmitter<string>()
  mode = 'card';
  onSwitch(){
    this.mode = (this.mode == 'card') ? 'row' : 'card';
    this.onChangeMode.emit(this.mode);
  }

  constructor() {
    
    
   }
 
  ngOnInit(): void {
  }

}
