import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { LinkInfoCardComponent } from './linkInfoCard/linkInfoCard.component';
import { LinkinfoService } from './_services/linkinfo.service';
import { EditLinkInfoComponent } from './editLinkInfo/editLinkInfo.component';

@NgModule({
   declarations: [
      AppComponent,
      NavbarComponent,
      HomeComponent,
      LinkInfoCardComponent,
      EditLinkInfoComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      ReactiveFormsModule
   ],
   providers: [
      LinkinfoService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
