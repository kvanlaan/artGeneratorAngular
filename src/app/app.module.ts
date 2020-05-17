import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent, LoginDialogComponent, DeleteDialogComponent } from './app.component';
import {
  MatDividerModule
} from '@angular/material/divider';

import {
  MatCheckboxModule,
} from '@angular/material/checkbox';

import {
  MatDialogModule
} from '@angular/material/dialog';

import {
  MatButtonModule,
} from '@angular/material/button';


import {
  MatButtonToggleModule,
} from '@angular/material/button-toggle';

import {
  MatGridListModule
} from '@angular/material/grid-list';

import {
  MatIconModule
} from '@angular/material/icon';


import {
  MatProgressSpinnerModule
} from '@angular/material/progress-spinner';

import { MatTooltipModule } from '@angular/material/tooltip';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GeneratorComponent } from './generator/generator.component';
import 'hammerjs';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CustomImagesDialogComponent } from '../customimagesdialog/customimagesdialog.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginDialogComponent,
    DeleteDialogComponent,
    CustomImagesDialogComponent,
    GeneratorComponent
  ],
  entryComponents: [
    LoginDialogComponent,
    DeleteDialogComponent,
    CustomImagesDialogComponent
  ],
  imports: [
    MatButtonModule,
    MatDialogModule,
    MatCheckboxModule,
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
