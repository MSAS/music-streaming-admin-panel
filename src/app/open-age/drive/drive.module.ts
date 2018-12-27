import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocsService } from './services';

const angularModules = [
  CommonModule
];

const sharedComponents = [
];

const thirdPartyModules = [];
const services = [
  DocsService
];
const guards = [];
const pipes = [];

@NgModule({
  imports: [
    ...angularModules,
    ...thirdPartyModules,
  ],

  exports: [
    ...angularModules,
    ...thirdPartyModules,
    ...sharedComponents,
    ...pipes
  ],
  declarations: [
    ...sharedComponents,
    ...pipes
  ],
  providers: [
    ...services,
    ...guards
  ]
})
export class DriveModule { }
