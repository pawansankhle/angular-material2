import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';
import { MaterialModule } from '@angular/material';
import { UserDetailComponent } from './app.user.component';
import { UserService } from './user.service';
import { AppRoutingModule } from './app.routing.module';



@NgModule({
  imports:      [ BrowserModule,MaterialModule.forRoot(),AppRoutingModule],
  declarations: [ AppComponent,UserDetailComponent],
  bootstrap:    [ AppComponent ],
  providers :   [ UserService ]
})
export class AppModule { }
