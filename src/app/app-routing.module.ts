import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './landing/components/dashboard/dashboard.component';
import { RoleGuard } from './open-age/directory/guards';
import { GuestGuard } from './open-age/directory/guards/guest.guard';
import { SystemGuard } from './open-age/directory/guards/system.guard';
import { ConstructionPageComponent } from './shared/components/construction-page/construction-page.component';
import { DocumentsComponent } from './shared-open-age/drive/components/documents/documents.component';
import { FoldersComponent } from './shared-open-age/drive/components/folders/folders.component';

const routes: Routes = [

  // {  path: '', component: DocumentsComponent , canActivate: [RoleGuard], pathMatch: 'full' },
  { path: 'login', loadChildren: 'app/login/login.module#LoginModule', canActivate: [GuestGuard] },

  {
    path: '', children: [
      { path: '', component: DocumentsComponent },
      { path: ':id', component: FoldersComponent }],
      canActivate: [RoleGuard], pathMatch: 'full' ,
      
  },
  {
    path: 'drive', children: [
      { path: '', component: DocumentsComponent },
      { path: ':id', component: FoldersComponent }],
      canActivate: [RoleGuard], pathMatch: 'full' 
  },


  { path: '**', loadChildren: 'app/landing/landing.module#LandingModule', canActivate: [RoleGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false, enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }