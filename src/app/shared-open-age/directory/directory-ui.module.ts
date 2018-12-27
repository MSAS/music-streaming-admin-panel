import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeRowItemComponent } from './components/employee-row-item/employee-row-item.component';

const components = [
  EmployeeRowItemComponent
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
export class DirectoryUiModule { }
