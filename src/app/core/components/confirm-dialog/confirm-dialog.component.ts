import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-confirm-dialog',
  templateUrl: './confirm-dialog.component.html',
  styleUrls: ['./confirm-dialog.component.css']
})
export class ConfirmDialogComponent implements OnInit {

  @Input()
  message = 'Are you sure?';

  @Input()
  title = 'Confirm';

  @Input()
  confirmTitle = 'Yes';

  @Input()
  confirmColor = 'primary';

  @Input()
  cancelTitle = 'No';



  constructor(
    public dialogRef: MatDialogRef<ConfirmDialogComponent>
  ) { }

  ngOnInit() {
  }

}
