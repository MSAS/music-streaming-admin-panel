import { Component, OnInit } from '@angular/core';
import { Nav } from '@open-age/ng-structures';
import { UxService } from '../../services';
import { RoleService } from '../../../open-age/directory/services';
import { User } from '../../../open-age/directory/models';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  user: User;
  nav: any;
  constructor(
    private uxService: UxService,
    private roleService: RoleService
  ) {

    this.user = this.roleService.currentUser();

    this.nav = [{
      title: 'Drive',
      items: [{
        title: 'Docs',
        routerLink: ['drive'],
        permissions: ['system.admin']
      }]
    }];


    this.roleService.userChanges.subscribe(user => {
      this.user = user;
    });
  }

  ngOnInit() {
  }

}
