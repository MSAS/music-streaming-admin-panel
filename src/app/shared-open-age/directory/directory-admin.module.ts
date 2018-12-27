import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalEditorComponent } from './components/personal-editor/personal-editor.component';
import { EmploymentEditorComponent } from './components/employment-editor/employment-editor.component';
import { EmployeeDialogComponent } from './components/employee-dialog/employee-dialog.component';
import { EmployeeCardComponent } from './components/employee-card/employee-card.component';

const components = [
  PersonalEditorComponent,
  EmploymentEditorComponent,
  EmployeeDialogComponent,
  EmployeeCardComponent
];
const thirdPartyModules = [];


@NgModule({
  imports: [
    CommonModule,
    ...thirdPartyModules
  ],
  declarations: [...components],
  exports: [...thirdPartyModules, ...components],
  providers: []
})
export class DirectoryAdminModule { }
