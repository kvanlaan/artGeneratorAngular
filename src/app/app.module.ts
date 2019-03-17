import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, LoginDialogComponent, DeleteDialogComponent } from './app.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatProgressSpinnerModule,
} from '@angular/material';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneratorComponent } from './generator/generator.component';
import 'hammerjs';
@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    DeleteDialogComponent,
    GeneratorComponent
  ],
  entryComponents: [
    LoginDialogComponent,
    DeleteDialogComponent
  ],
  imports: [
    MatButtonModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
  
    BrowserModule,
    FlexLayoutModule,
    MatGridListModule,
    MatIconModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
