import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.css']
})
export class FileUploaderComponent implements OnInit {

  /** Link text */
  @Input() text = 'Upload';

  /** Name used in form which will be sent in HTTP request. */
  @Input() param = 'file';

  /** Target URL for file uploading. */
  @Input() target = 'https://file.io';

  /** File extension that accepted, same as 'accept' of <input type="file" />.
      By the default, it's set to 'image/*'. */
  @Input() accept = 'image/*';

  /** Allow you to add handler after its completion. Bubble up response text from remote. */
  @Output() complete = new EventEmitter<string>();

  // private files: Array<FileUploadModel> = [];

  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

}
