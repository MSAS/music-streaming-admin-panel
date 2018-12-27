import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent implements OnInit {


  @Input()
  pageSize: number;

  @Input()
  currentPageNo: number;

  @Input()
  totalPages: number;

  @Output()
  showPage: EventEmitter<number> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  isFirstPage() {
    return false;
  }

  isLastPage() {
    return false;
  }

  show(no: number) {
    this.showPage.next(no);
  }

}
