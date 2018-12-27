import { NgModule } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';

// import { DirectoryModule } from '../directory/directory.module';
import { LandingRoutingModule } from './landing-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ClickOutsideModule } from 'ng4-click-outside';
import { SummaryModule } from '../summary/summary.module';
import { DirectoryModule } from '../open-age/directory/directory.module';
import { AngularFireMessagingModule } from '@angular/fire/messaging';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../../environments/environment';

const components = [
  DashboardComponent
];
const thirdPartyModules = [];
const services = [];
const guards = [];
const pipes = [];

@NgModule({
  imports: [
    CommonModule,
    DirectoryModule,
    SharedModule,
    SummaryModule,
    // CoreModule,
    ClickOutsideModule,
    LandingRoutingModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireMessagingModule,
    ...thirdPartyModules,
    // Role
  ],
  declarations: [...components, ...pipes],
  exports: [...thirdPartyModules, ...components, ...pipes],
  providers: [...services, ...guards,
    AsyncPipe]
})
export class LandingModule { }
