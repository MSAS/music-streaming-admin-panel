import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'directory-employee-row-item',
  templateUrl: './employee-row-item.component.html',
  styleUrls: ['./employee-row-item.component.css']
})
export class EmployeeRowItemComponent implements OnInit {
  @Input()
  employee: any;

  constructor(
    // private directoryDialogService: DirectoryDialogService
  ) { }

  ngOnInit() {
  }

  showEmployee() {
    // this.directoryDialogService.showEmployee(this.employee.code);
  }
}
