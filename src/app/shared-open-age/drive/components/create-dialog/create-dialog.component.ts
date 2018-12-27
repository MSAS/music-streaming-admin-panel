import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css']
})
export class CreateDialogComponent implements OnInit {

  folderName: string;
  fileToUpload: any;
  fileName: string;

  constructor(
    public dialogRef: MatDialogRef<CreateDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }
  
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  create() {
    this.dialogRef.close(this.folderName)
  }

  upload() {
    let file={
      name : this.fileName,
      file : this.fileToUpload
    }
    this.dialogRef.close(file)
  }

}
