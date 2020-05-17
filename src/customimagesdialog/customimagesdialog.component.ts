import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatCheckboxChange} from '@angular/material/checkbox'

@Component({
  selector: 'app-customimagesdialog',
  templateUrl: './customimagesdialog.component.html',
  styleUrls: ['./customimagesdialog.component.css']
})
export class CustomImagesDialogComponent {
  readOnly: boolean = true;
  disable: boolean = true;
  constructor(private dialogRef: MatDialogRef<CustomImagesDialogComponent>, @Inject(MAT_DIALOG_DATA) dialogData) { 
    this.readOnly = dialogData.readOnly;
  }
  
  toggleShowCustomImages(event: MatCheckboxChange){
    this.disable = event.checked;
  }
  close(){
    this.dialogRef.close(this.disable);
  }
}
