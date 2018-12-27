import { Component, OnInit, Input } from '@angular/core';
import { Employee } from '../../../../open-age/directory/models';

@Component({
  selector: 'directory-employee-card',
  templateUrl: './employee-card.component.html',
  styleUrls: ['./employee-card.component.css']
})
export class EmployeeCardComponent implements OnInit {

  @Input()
  employee: Employee;

  constructor() { }

  ngOnInit() {
  }

}
