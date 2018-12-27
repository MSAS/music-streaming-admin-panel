import { GenericApi } from '@open-age/ng-api';
import { Http } from '@angular/http';
import { RoleService } from './role.service';
import { environment } from '../../../../environments/environment';

export class DirectoryApi<TModel> extends GenericApi<TModel> {
  constructor(
    key: string,
    http: Http,
    private roleService: RoleService
  ) {
    super(environment.apiUrls.directory, key, http, [{
      key: 'x-role-key',
      value: () => this.roleService.currentRole().key
    }, {
      key: 'x-tenant-code',
      value: () => this.roleService.currentTenant().code
    }]);
  }
}
