import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mode: any;
  title = 'angular-project';
  changeMode(mode: any){
    this.mode = mode;
    console.log(mode)
  }
}
