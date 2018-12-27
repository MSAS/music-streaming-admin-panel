import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';
import { CreateDialogComponent } from './create-dialog/create-dialog.component';
import { DocumentsComponent } from './documents/documents.component';
import { FoldersComponent } from './folders/folders.component';
import { FolderService } from '../../../open-age/drive/services/folder.service';
import { FileService } from '../../../open-age/drive/services/file.service';

const components = [
    CreateDialogComponent,
    DocumentsComponent,
    FoldersComponent
];

const thirdPartyModules = [];

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      ...thirdPartyModules
    ],
    declarations: [...components],
    exports: [...thirdPartyModules, ...components],
    providers: [FolderService,FileService],
    entryComponents: [
        CreateDialogComponent
    ],
  })

  export class driveUiModule { }