import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { HomeDirective } from './home.directive';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, HomeDirective, GameComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [HomeDirective],
  bootstrap: [AppComponent],
})
export class AppModule {}
