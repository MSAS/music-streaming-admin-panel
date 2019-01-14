import { Component, OnInit } from '@angular/core';
import { getAllLifecycleHooks } from '@angular/compiler/src/lifecycle_reflector';
import { DocsService } from '../../../../open-age/drive/services/docs.service';
import { ResourceLoader } from '@angular/compiler';
import { Folder } from '../../../../open-age/drive/models/folder.model';
import { Router } from '@angular/router';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { MatDialog } from '@angular/material';
import { FolderService } from '../../../../open-age/drive/services/folder.service';
import { FileService } from '../../../../open-age/drive/services/file.service';

import { Http } from '@angular/http';
import { RoleService } from '../../../../open-age/directory/services';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {

  tokenType = '123';
  tokenId = '123';
  fileToUpload: File = null;

  files: File[];
  folders = [];
  dialogRef: any;
  isProcessing = false;
  constructor(
    private http: Http,
    private roleService: RoleService,
    private docService: DocsService,
    private folderService: FolderService,
    public router: Router,
    public dialog: MatDialog,
    public _DomSanitizer: DomSanitizer
  ) {
    this.getAllFiles();
    this.getAllFolders();
  }

  ngOnInit() {
  }

  getAllFiles() {
    this.isProcessing = true;
    this.docService.getAllDocument(this.tokenType, this.tokenId)
      .subscribe(result => {
        this.files = result.items;
        this.isProcessing = false;
      });
    console.log(this.folders);
  }

  getAllFolders() {
    const id = 1;
    this.isProcessing = true;
    this.folderService.search({ isParent: 'true' }).subscribe(result => {
      this.folders = result.items;
      this.isProcessing = false;
    });
  }

  createFolder() {
    this.dialogRef = this.dialog.open(CreateDialogComponent, {
      data: {
        msg: 'create_folder'
      }, width: '400px'
    });
    this.dialogRef.afterClosed()
      .subscribe(response => {
        if (response) {
          this.isProcessing = true;
          const folderName = {
            name: response,
            isPublic: false,
            limit: '50mb'
          };
          this.docService.postFolder(folderName)
            .subscribe(data => {
              this.getAllFolders();
              this.isProcessing = false;
            }, error => {
              console.log(error);
              this.isProcessing = false;
            });
        }
      });

  }

  uploadFile() {
    this.dialogRef = this.dialog.open(CreateDialogComponent, {
      data: {
        msg: 'upload_file'
      }, width: '400px'
    });
    this.dialogRef.afterClosed()
      .subscribe(response => {
        if (response) {
          this.isProcessing = true;
          const fileService = new FileService(this.http, this.roleService);
          fileService.upload(response.file).subscribe(data => {
            this.getAllFiles();
            console.log(data);
            this.isProcessing = false;
          }, error => {
            console.log(error);
            this.isProcessing = false;
          });
        }
      });

  }

  openFolder(folder) {
    this.router.navigate([`/drive/${folder.id}`], { queryParams: { folderName: folder.name } });
  }

  openFile(url) {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.target = '_blank';
    a.setAttribute('style', 'display: none');
    a.download = 'test';
    a.click();
    document.body.removeChild(a);
  }

}
