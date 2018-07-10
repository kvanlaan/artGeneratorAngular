import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent, LoginDialogComponent } from './app.component';
import {MatButtonModule,  MatDialog,  MatCheckboxModule, MatDialogModule} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent
  ],
  entryComponents: [
    LoginDialogComponent
  ],
  imports: [MatButtonModule,     MatDialogModule,   BrowserAnimationsModule,
    BrowserModule, FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
