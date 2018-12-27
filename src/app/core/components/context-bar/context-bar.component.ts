import { Component, OnInit, Input } from '@angular/core';
import { Nav, Menu, Link, Action } from '@open-age/ng-structures';
import { UxService } from '../../services';
import { Location } from '@angular/common';
import { Service } from '../../../open-age/directory/models';

@Component({
  selector: 'app-context-bar',
  templateUrl: './context-bar.component.html',
  styleUrls: ['./context-bar.component.css']
})
export class ContextBarComponent implements OnInit {
  @Input()
  service: Service;

  title: string;
  show = false;

  contextMenu: Menu;
  constructor(
    private uxService: UxService,
    private location: Location
  ) {
    this.uxService.contextMenuChanges.subscribe(menu => {
      this.contextMenu = menu;
      this.setVisibility();
    });

    this.uxService.title.subscribe(title => {
      this.title = title;
      this.setVisibility();
    });
  }

  ngOnInit() {
  }

  setVisibility() {
    if (!this.title && (!this.contextMenu || !this.contextMenu.items.length)) {
      this.show = false;
    } else {
      this.show = true;
    }

    // if (this.show) {
    //   this.uxService.setFullScreen();
    // } else {
    //   this.uxService.exitFullScreen();
    // }
  }

  toggle(item: Action) {
    item.value = !item.value;
    item.event(item.value);
  }

  back() {
    this.location.back();
  }
}
