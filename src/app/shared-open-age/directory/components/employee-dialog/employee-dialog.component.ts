import { Component, OnInit, Input } from '@angular/core';
import { DetailBase, DetailOptions } from '@open-age/ng-structures';
import { MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { Employee } from '../../../../open-age/directory/models';
import { EmployeeService } from '../../../../open-age/directory/services';

@Component({
  selector: 'directory-employee-dialog',
  templateUrl: './employee-dialog.component.html',
  styleUrls: ['./employee-dialog.component.css']
})
export class EmployeeDialogComponent extends DetailBase<Employee> implements OnInit {

  @Input()
  code: string;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    public dialogRef: MatDialogRef<EmployeeDialogComponent>
  ) {
    super(new DetailOptions({ api: employeeService }));
  }

  ngOnInit() {
    this.get(this.code).subscribe();
  }

  openEditor() {
    this.dialogRef.close();
    this.router.navigate(['/', 'admin', 'employees', this.properties.code]);
  }
}
