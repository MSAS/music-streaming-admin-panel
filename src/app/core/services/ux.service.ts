import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Nav, Menu, Link, Action } from '@open-age/ng-structures';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ConfirmDialogComponent } from '../components/confirm-dialog/confirm-dialog.component';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UxService {

  private _errors = new Subject<string>();
  private _title = new Subject<string>();
  private _search = new Subject<string>();
  private _fullScreen = false;
  private _fullScreenSubject = new Subject<boolean>();
  private _showContext = new Subject<boolean>();
  private _showSearchText = new Subject<boolean>();
  private _showBackButton = new Subject<string>();

  private _navBar = new Subject<Nav>();
  private _contextMenuSubject = new Subject<Menu>();
  private _contextMenu: Menu = new Menu([]);
  private _breadcrumbSubject = new Subject<Link[]>();

  private _breadcrumb: Link[] = [];

  showContextChanges = this._showContext.asObservable();
  showContextSearchChanges = this._showSearchText.asObservable();
  showBackButtonChanges = this._showBackButton.asObservable();

  searchChanges = this._search.asObservable();
  breadcrumbChanges = this._breadcrumbSubject.asObservable();
  navBarChanges = this._navBar.asObservable();
  contextMenuChanges = this._contextMenuSubject.asObservable();
  errors = this._errors.asObservable();
  title = this._title.asObservable();
  fullScreen = this._fullScreenSubject.asObservable();

  constructor(
    public dialog: MatDialog
  ) { }

  setSearchText(search: string) {
    this._search.next(search);
  }

  resetSearchText() {
    this._search.next(null);
  }

  setNavBar(nav: Nav) {
    this._navBar.next(nav);
  }

  resetNavBar() {
    this._navBar.next(null);
  }

  setContextMenu(menu: Menu) {
    this._contextMenu = menu;
    this._contextMenuSubject.next(this._contextMenu);
  }

  addToContextMenu(action: Action) {
    this._contextMenu = this._contextMenu || new Menu([]);
    this._contextMenu.items.push(action);
    this._contextMenuSubject.next(this._contextMenu);
  }

  setContext(options: {
    title?: string,
    show?: {
      search?: boolean,
      back?: boolean | string
    },
    actions?: {
      event?: (any) => void;
      title?: string;
      icon?: string;
      type?: string;
      value?: any;
      options?: any[];
      display?: string;
    }[]
  }) {
    const actions: Action[] = [];
    if (options.actions) {
      options.actions.forEach(action => {
        actions.push(new Action(action));
      });
    }

    this.setContextMenu(new Menu(actions));

    let backIcon: string = null;
    let showSearch = false;

    if (options.show) {
      if (options.show.back) {
        backIcon = options.show.back === true ? 'clear' : options.show.back;
      }

      if (options.show.search) {
        showSearch = true;
      }
    }

    this._showSearchText.next(showSearch);
    this._showBackButton.next(backIcon);

    if (options.title) {
      this.setTitle(options.title);
    }

    this._showContext.next(true);
  }

  resetContext() {
    this._showContext.next(false);
    this._contextMenu = null;
    this._contextMenuSubject.next(this._contextMenu);
    this._showSearchText.next(false);
  }

  showContextSearch() {
    this._showSearchText.next(false);
  }

  pushBreadcrumb(link: Link) {
    this._breadcrumb.forEach(item => item.isActive = true);
    link.isActive = true;
    this._breadcrumb.push(link);
    this._breadcrumbSubject.next(this._breadcrumb);
  }
  popBreadcrumb() {
    if (this._breadcrumb.length > 0) {
      this._breadcrumb.pop();
      this._breadcrumb[this._breadcrumb.length - 1].isActive = true;
    }
    this._breadcrumbSubject.next(this._breadcrumb);
  }

  resetBreadcrumb() {
    this._breadcrumb = [];
    this._breadcrumbSubject.next([]);
  }

  errorOccurred(error: string) {
    this._errors.next(error);
  }

  setTitle(title: string) {
    this._title.next(title);
  }

  resetTitle() {
    this._title.next('');
  }

  getFullScreen() {
    return this._fullScreen;
  }
  setFullScreen() {
    this._fullScreen = true;
    this._fullScreenSubject.next(this._fullScreen);
  }

  exitFullScreen() {
    this._fullScreen = false;
    this._fullScreenSubject.next(this._fullScreen);
  }


  showConfirmDialog(message: string, options?: {
    title?: string,
    confirm?: {
      title?: string,
      color?: string
    },
    cancel?: {
      title?: string
    }
  }): Observable<boolean> {
    const dialogRef: MatDialogRef<ConfirmDialogComponent> = this.dialog.open(ConfirmDialogComponent);
    const component = dialogRef.componentInstance;
    component.message = message;
    if (options) {
      component.title = options.title || 'Confirm';

      if (options.confirm) {
        component.confirmTitle = options.confirm.title || 'Yes';
        component.confirmColor = options.confirm.color || 'primary';
      }

      if (options.cancel) {
        component.cancelTitle = options.cancel.title || 'No';
      }
    }
    return dialogRef.afterClosed();
  }

}
