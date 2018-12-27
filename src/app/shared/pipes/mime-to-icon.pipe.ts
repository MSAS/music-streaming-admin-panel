import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mimeToIcon'
})
export class MimeToIconPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 'image/jpg':
      case 'image/jpeg':
      case 'image/png':
      case 'image/video':
        return 'fa fa-file-image-o';
      case 'text/html':
        return 'fa fa-html5';
      case 'text/text':
        return 'fa fa-text-o';
      case 'application/pdf':
        return 'fa fa-pdf-o';
      case 'word':
      case 'application/vnd.ms-word':
      case 'application/vnd.openxmlformats-officedocument.wordprocessingml.document':
        return 'fa fa-file-word-o';
      case 'excel':
      case 'application/vnd.ms-excel':
      case 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet':
        return 'fa fa-file-excel-o';
      case 'text/markdown':
        return 'fa fa-file-code-o';
    }
    return 'fa fa-file-o';
  }

}
