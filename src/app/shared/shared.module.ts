import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
  MatToolbarModule,
  MatSidenavModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatSelectModule,
  MatExpansionModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatAutocompleteModule,
  MatSlideToggleModule,
  MatProgressBarModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTooltipModule,
  // MatIconRegistry
} from '@angular/material';
import { JSONEditorModule } from 'ng2-jsoneditor';
import { FileUploadModule } from 'ng2-file-upload';
import { QRCodeModule } from 'angularx-qrcode';

import { RouterModule } from '@angular/router';
import { QuillEditorComponent } from './components/quill-editor/quill-editor.component';
import { MimeToIconPipe } from './pipes/mime-to-icon.pipe';
import { FiltersComponent } from './components/filters/filters.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { FileUploaderComponent } from './components/file-uploader/file-uploader.component';
import { ProcessingIndicatorComponent } from './components/processing-indicator/processing-indicator.component';
import { ErrorPageComponent } from './components/error-page/error-page.component';
import { ConstructionPageComponent } from './components/construction-page/construction-page.component';

const angularModules = [
  CommonModule,
  FormsModule,
  RouterModule,
  ReactiveFormsModule
];

const thirdPartyModules = [
  FileUploadModule,
  MatToolbarModule,
  MatSidenavModule,
  MatButtonModule,
  MatChipsModule,
  MatListModule,
  MatInputModule,
  MatIconModule,
  MatCheckboxModule,
  MatCardModule,
  MatSelectModule,
  MatExpansionModule,
  MatGridListModule,
  MatProgressSpinnerModule,
  MatAutocompleteModule,
  MatSidenavModule,
  MatSlideToggleModule,
  MatProgressBarModule,
  MatButtonToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatTabsModule,
  MatTooltipModule,
  MatProgressSpinnerModule,
  MatIconModule,
  MatToolbarModule,
  // JSONEditorModule,
  // MatIconRegistry,
  QRCodeModule
];

const sharedComponents = [
  ProcessingIndicatorComponent,
  QuillEditorComponent,
  FiltersComponent,
  PaginatorComponent,
  FileUploaderComponent,
  ErrorPageComponent,
  ConstructionPageComponent,
];
const pipes = [
  MimeToIconPipe,
];

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
  ]
})
export class SharedModule { }
