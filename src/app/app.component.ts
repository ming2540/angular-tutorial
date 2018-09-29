import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title = 'My First Angular App';
  public count: number = 0;

  constructor(){
    setInterval(()=>{
      this.count++;
    },1000)
  }

  getDate():string {
    let now = new Date();

    return now.toISOString();
  }

}
