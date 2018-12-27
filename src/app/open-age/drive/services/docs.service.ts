import { Injectable } from '@angular/core';
import { DriveApiBase } from './drive-api.base';
import { Doc } from '../models/doc.model';
import { Http } from '@angular/http';
import { RoleService } from '../../directory/services';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs/Observable';
import { FileUploader, FileItem } from 'ng2-file-upload';

@Injectable()
export class DocsService extends DriveApiBase<any> {
  roleKey : any
  tenantCode : any
  
  constructor(
    http: Http,
    roleService: RoleService,
    private httpClient: HttpClient) {
    super('docs', http, roleService);
    this.roleKey =  localStorage.getItem('role-key')
    this.tenantCode =  localStorage.getItem('tenant-code')
  }

  public makeHeader() {
    let headers = new HttpHeaders();
    // headers.append('Content-Type', 'application/json')
    // headers.set('x-role-key', this.roleKey);
    // headers.set('tenant-code', this.tenantCode);
    // headers['x-role-key'] = localStorage.getItem('role-key')
    // headers['tenant-code'] = localStorage.getItem('tenant-code')
    // console.log({ headers: {'x-role-key': this.roleKey,'tenant-code': this.tenantCode} })
    return { headers: {'x-role-key': this.roleKey,'tenant-code': this.tenantCode} };
  }

  public getAllDocument(entityType: string, entityId: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrls.docs}/${entityType}/${entityId}/files`,
      this.makeHeader())
      .map((result) => result)
  }

  public postDocument(entityType: string, entityId: string, fileToUpload: File): Observable<any> {
    
    return this.httpClient.post(`${environment.apiUrls.docs}/${entityType}/${entityId}/files`,fileToUpload,
      this.makeHeader())
      .map((result) => result)
  }
  // public postDocument(entityType: string, entityId: string, fileToUpload: File): Observable<any> {
  //   let url = `${environment.apiUrls.docs}/${entityType}/${entityId}/files`
  //   let headers = [{ 'x-role-key': this.roleKey, 'tenant-code': this.tenantCode }]
  //   const uploader = new FileUploader({
  //     url: url,
  //   })
  //   uploader.addToQueue([fileToUpload])
  //   return
  // }

  public postFolder(data:any): Observable<any> {
    return this.httpClient.post(`${environment.apiUrls.docs}/folders`,data,
    this.makeHeader())
    .map((result) => result)
  }

  public getAllFolders(): Observable<any> {
    return this.httpClient.get(`${environment.apiUrls.docs}/folders`,
  this.makeHeader())
  .map((result) => result)
  }
  public getAllFoldersById(id: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrls.docs}/folders/${id}`,
  this.makeHeader())
  .map((result) => result)
  }
}
