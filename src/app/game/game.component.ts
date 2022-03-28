import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeDirective } from '../home.directive';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css'],
})
export class GameComponent implements OnInit {
  subscription: Subscription = new Subscription();
  constructor(public home: HomeDirective) {}
  title = '';
  msg = '';
  ngOnInit(): void {
    this.subscription = this.home.currentMsg.subscribe(
      (msg) => (this.msg = msg)
    );
  }
  changeMsg() {
    this.home.changeMessage(this.msg);
    this.msg = this.title;
  }
  loging(title: any) {
    this.msg = title;
    this.home.changeMessage(this.msg);
  }
}
