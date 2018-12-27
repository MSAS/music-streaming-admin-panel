import { PagerBaseComponent, PagerOptions, Action, Menu } from '@open-age/ng-structures';
import { OnInit } from '@angular/core';
import { IApi } from '@open-age/ng-api';
import { UxService } from './services';

export abstract class ListBaseComponent<TModel> extends PagerBaseComponent<TModel> {
  view = 'table';
  constructor(pagerOptions: any, details: {
    title?: string,
    actions?: {
      event?: (any) => void;
      title?: string;
      icon?: string;
      type?: string;
      value?: any;
      options?: any[];
      display?: string;
    }[],
    show?: {
      view?: string,
      refresh?: boolean,
      search?: boolean
    }
  }, uxService: UxService) {
    super(new PagerOptions(pagerOptions));

    const actions: any[] = [];

    if (details.show && details.show.view) {
      actions.push({
        type: 'toggle-group',
        value: this.view, options: [{
          icon: 'view_list',
          value: 'list',
        }, {
          icon: 'view_module',
          value: 'grid',
        }], event: (value) => {
          this.view = value;
        }
      });
    }

    if (details.show && details.show.refresh) {
      actions.push({
        title: 'Refresh', icon: 'cached', event: () => {
          this.fetch().subscribe();
        }
      });
    }

    uxService.setContext({
      title: details.title,
      show: {
        search: details.show && details.show.search,
      },
      actions: actions
    });
  }
}
