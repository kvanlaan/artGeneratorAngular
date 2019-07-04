import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, LoginDialogComponent, DeleteDialogComponent } from './app.component';
import {
  MatButtonModule,
  MatDialogModule,
  MatGridListModule,
  MatIconModule,
  MatProgressSpinnerModule,
  MatButtonToggleModule,
  MatDividerModule,
} from '@angular/material';
import { MatTooltipModule } from '@angular/material/tooltip';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneratorComponent } from './generator/generator.component';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
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
    FormsModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatTooltipModule,
    HttpClientModule,
    BrowserModule,
    FlexLayoutModule,
    MatGridListModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
