import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Service, Role } from '../../../open-age/directory/models';
import { RoleService } from '../../../open-age/directory/services';
import { UxService } from '../../../core/services/ux.service';
import { Link } from '@open-age/ng-structures';
import { Alert } from '../../../core/models/alert.model';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  @Input() role: Role
  services: Service[] = [];
  roleKey: string;
  myAlerts: Alert[] = [];
  teamAlerts: Alert[] = [];
  message;

  constructor(
    private roleService: RoleService,
    private uxService: UxService,
    private router: Router,
  ) {
  
    roleService.roleChanges.subscribe(role => {
      this.myAlerts = [];
      this.teamAlerts = [];
    });

  }

  ngOnInit() {
    this.roleKey = localStorage.getItem('role-key');

    // this.services = this.roleService.currentRole().organization.services;
    // this.summaryService.getAmsSummary()
    // .then((summary)=>{
    //   this.summary = summary;
    //   console.log('summary', this.summary)

    // })
    this.myAlerts = [];

    this.uxService.pushBreadcrumb(new Link({ title: 'Dashboard', routerLink: [] }));
    this.uxService.setTitle('Dashboard');

  }

  ngDoCheck() {
    this.services = [];
    const role = this.roleService.currentRole();

    if (role && role.organization && role.organization.services) {
      this.services = role.organization.services;
    }
  }

  ngOnChanges() {
    this.roleService.currentRole();
  }
}

