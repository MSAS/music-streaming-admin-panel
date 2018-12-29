import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DocsService } from '../../../../open-age/drive/services';
import { MatDialog } from '@angular/material';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { FolderService } from '../../../../open-age/drive/services/folder.service';
import { FileService } from '../../../../open-age/drive/services/file.service';
import { Http } from '@angular/http';
import { RoleService } from '../../../../open-age/directory/services';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css']
})
export class FoldersComponent implements OnInit {

  folderId: string
  folderName: string
  dialogRef: any;
  tokenType = '123'
  tokenId = '123'
  fileToUpload: File = null;
  isProcessing: boolean = true

  folders = [];
  files = [];
  constructor(
    private http: Http,
    private roleService: RoleService,
    private docService: DocsService,
    private folderService: FolderService,
    private activatedRoute: ActivatedRoute,
    public router: Router,
    public dialog: MatDialog,
  ) {
    this.folderId = this.activatedRoute.snapshot.params['id'];
    this.activatedRoute.queryParams.subscribe(params => {
      this.folderName = params['folderName'];
    });
    this.activatedRoute.params.subscribe(routeParams => {
      this.folderId = routeParams.id
      this.getAllFolderById()
    });

  }

  ngOnChanges() {
  }
  ngOnInit() {
  }
  getAllFolderById() {
    this.isProcessing = true

    this.docService.getAllFoldersById(this.folderId).subscribe(item => {
      this.folders = item.data.folders;
      this.files = item.data.files
      this.isProcessing = false
    })
  }
  openFolder(folder) {
    this.folderId = folder.id;
    this.folderName = folder.name
    this.router.navigate([`/drive/${folder.id}`], { queryParams: { folderName: folder.name } })
    this.getAllFolderById()
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
          let folderName = {
            name: response,
            isPublic: false,
            limit: '50mb',
            parent: {
              id: this.folderId
            }
          }
          this.isProcessing = true
          this.docService.postFolder(folderName)
            .subscribe(data => {
              this.getAllFolderById()
              this.isProcessing = false

            }, error => {
              console.log(error);
              this.isProcessing = false

            });
        }
      });



  }


  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadFile()
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
          this.isProcessing = true
          let fileService = new FileService(this.http, this.roleService);
          fileService.upload(response.file, response.name, { 'folder-id': this.folderId }).subscribe(data => {
            this.isProcessing = false
            this.getAllFolderById()
          }, error => {
            console.log(error);
            this.isProcessing = false
          });
        }
      });

  }

  openFile(url) {
    const a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url
    a.target = '_blank';
    a.setAttribute('style', 'display: none');
    a.download = 'test';
    a.click();
    document.body.removeChild(a);
  }

}
