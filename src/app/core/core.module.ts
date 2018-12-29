import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


import {
  UxService,
  ValidationService,

} from './services';
import { ToastyModule } from 'ng2-toasty';

import {
  MatToolbarModule,
  MatButtonModule,
  MatTabsModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatCheckboxModule,
  MatCardModule,
  MatTooltipModule,
  MatOptionModule,
  MatFormFieldModule
  // MatAccordionModule,
} from '@angular/material';


import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { ContextBarComponent } from './components/context-bar/context-bar.component';

import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProfileRowComponent } from './components/profile-row/profile-row.component';
import { GroupIconsComponent } from './components/group-icons/group-icons.component';
import { RoleService } from '../open-age/directory/services';
import { RoleGuard, AdminGuard } from '../open-age/directory/guards';
import { SystemGuard } from '../open-age/directory/guards/system.guard';
import { GuestGuard } from '../open-age/directory/guards/guest.guard';
import { DirectoryModule } from '../open-age/directory/directory.module';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';


const components = [
  HeaderComponent,
  FooterComponent,
  SideNavComponent,
  ContextBarComponent,
  NotFoundComponent,
  GroupIconsComponent,
  ProfileRowComponent,
  ConfirmDialogComponent
];
const thirdPartyModules = [
  ToastyModule,
  MatToolbarModule,
  MatButtonModule,
  MatTabsModule,
  MatSnackBarModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatMenuModule,
  MatCheckboxModule,
  MatCardModule,
  MatTooltipModule,
];
const services = [UxService, RoleService, ValidationService];
const guards = [RoleGuard, AdminGuard, SystemGuard, GuestGuard];
const pipes = [];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    DirectoryModule,
    ...thirdPartyModules,
  ],
  declarations: [...components, ...pipes],
  exports: [...thirdPartyModules, ...components, ...pipes],
  providers: [...services, ...guards]
})
export class CoreModule { }
