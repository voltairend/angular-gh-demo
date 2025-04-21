import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit, OnDestroy
{
  title = 'angular-gh-demo';
  currentTime: string = '';
  private intervalId: any;
  
  ngOnInit() {
    this.updateTime();
    this.intervalId = setInterval(() => this.updateTime(), 1000);
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }

  updateTime() {
    const now = new Date();
    this.currentTime = now.toLocaleTimeString(); // or format it however you like
  }
}
