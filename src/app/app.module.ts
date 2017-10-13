import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';

import { BoatService } from './services/boat.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [BoatService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
