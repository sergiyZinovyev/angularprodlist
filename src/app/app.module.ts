import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SearchPipe } from './search.pipe';
import { FiltrPipe } from './filtr.pipe';
import { SummFiltrArrPipe } from './summ-filtr-arr.pipe';

@NgModule({
  declarations: [
    AppComponent,
    SearchPipe,
    FiltrPipe,
    SummFiltrArrPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
