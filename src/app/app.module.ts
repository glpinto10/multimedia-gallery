import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MultimediaListComponent } from './components/multimedia-list/multimedia-list.component';
import { MultimediaDetailsComponent } from './components/multimedia-details/multimedia-details.component';

@NgModule({
  declarations: [AppComponent, MultimediaListComponent, MultimediaDetailsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
