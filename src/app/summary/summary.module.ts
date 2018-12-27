import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocSummaryComponent } from './components/doc-summary/doc-summary.component';


const angularModules = [
  CommonModule
];

const sharedComponents = [
  DocSummaryComponent,
];

const thirdPartyModules = [];
const services = [];
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
    ...pipes,

  ],
  providers: [
    ...services,
    ...guards
  ]
})
export class SummaryModule { }
