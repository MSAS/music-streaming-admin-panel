import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';
import { Service, Role } from '../../../open-age/directory/models';
import { RoleService } from '../../../open-age/directory/services';

@Component({
  selector: 'app-group-icons',
  templateUrl: './group-icons.component.html',
  styleUrls: ['./group-icons.component.css']
})
export class GroupIconsComponent implements OnInit {
  services: Service[] = [];
  role: Role;

  constructor(
    private roleService: RoleService,
    private router: Router
  ) { }

  navigate(service: Service) {
  }
  ngOnInit() {
    this.role = this.roleService.currentRole();
    this.loadServices();

    this.roleService.roleChanges.subscribe(role => {
      this.role = role;
      this.loadServices();
    });

  }

  loadServices() {
    this.services = [];

    if (this.role && this.role.organization && this.role.organization.services && this.role.organization.services.length) {
      this.role.organization.services.forEach(service => {
        if (!!service.code) {
          this.services.push(service);
        }
      });
    }
  }
}
