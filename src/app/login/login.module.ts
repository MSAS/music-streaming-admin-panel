import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout.component';
import { OtpLoginComponent } from './components/otp-login/otp-login.component';
import { LoginRoutingModule } from './login-routing.module';
import { DirectoryModule } from '../open-age/directory/directory.module';
import { SharedModule } from '../shared/shared.module';

const components = [
  LayoutComponent,
  OtpLoginComponent,
];
const thirdPartyModules = [];
const services = [];
const guards = [];
const pipes = [];

@NgModule({
  imports: [
    CommonModule,
    DirectoryModule,
    LoginRoutingModule,
    SharedModule,
    ...thirdPartyModules,
    // Role
  ],
  declarations: [...components, ...pipes],
  exports: [],
  providers: [...services, ...guards]
})
export class LoginModule { }
