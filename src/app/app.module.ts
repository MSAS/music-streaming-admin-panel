import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { RoleService } from './open-age/directory/services';
import { DocumentsComponent } from './shared-open-age/drive/components/documents/documents.component';
import { FoldersComponent } from './shared-open-age/drive/components/folders/folders.component';
import { DriveModule } from './open-age/drive/drive.module';
import { CreateDialogComponent } from './shared-open-age/drive/components/create-dialog/create-dialog.component';
import { driveUiModule } from './shared-open-age/drive/components/drive-ui.module';
import { SharedModule } from './shared/shared.module';
import { LandingModule } from './landing/landing.module';


const components = [
  AppComponent
];

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    AppRoutingModule,
    CoreModule,
    HttpClientModule,
    DriveModule,
    driveUiModule,
    SharedModule,
    LandingModule
  ],
  providers: [
    // ...services
    RoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
