import { GenericApi } from '@open-age/ng-api';
import { Http } from '@angular/http';
import { environment } from '../../../../environments/environment';
import { RoleService } from '../../directory/services';

export class DriveApiBase<TModel> extends GenericApi<TModel> {
  constructor(
    key: string,
    http: Http,
    private roleService: RoleService
  ) {
    super(environment.apiUrls.docs, key, http, [{
      key: 'x-role-key',
      value: () => this.roleService.currentRole().key
    }, {
      key: 'x-tenant-code',
      value: () => this.roleService.currentTenant().code
    }]);
  }
}
