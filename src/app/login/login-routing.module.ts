import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { OtpLoginComponent } from './components/otp-login/otp-login.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    // children: [
    //   { path: 'otp', component: OtpLoginComponent },
    //   { path: 'qr', component: QrLoginComponent },
    //   { path: 'roles', component: RoleSelectorComponent },
    //   // { path: ':section', component: RoleSelectorComponent }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule {
}
