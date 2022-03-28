import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { HomeDirective } from '../home.directive';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(public home: HomeDirective) {}
  subscription: Subscription = new Subscription();
  msg = '';

  ngOnInit(): void {
    this.subscription = this.home.currentMsg.subscribe(
      (msg) => (this.msg = msg)
    );
  }
}
