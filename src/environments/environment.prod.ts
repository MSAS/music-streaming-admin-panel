export const environment = {
  production: true,
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
  name: 'prod'
};
