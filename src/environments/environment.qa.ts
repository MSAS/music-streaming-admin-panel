// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrls: {
    directory: 'http://ems-api-dev.m-sas.com/api',
    docs: 'http://docs-api-dev.m-sas.com/api'
  },
  tenant: {
    code: 'music',
  },
  tenants: {
    music: {
      name: 'DJ Rick',
      code: 'music',
      homeUrl: 'http://localhost:4200',
      joinUrl: 'http://localhost:4200/join',
      logo: 'https://static1.squarespace.com/static/5309226fe4b0c194bcbbfd0d/t/5548e440e4b0cbbc3dff4318/1430840385238/Logo_erp.png'
    }
  },
  organization: null,
  login: 'otp',
  name: 'qa'
};
