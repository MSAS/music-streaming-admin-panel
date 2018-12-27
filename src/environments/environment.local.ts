// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  silent: false,
  firebase: {
    apiKey: "AIzaSyBeGZJXRZCr6zfV00bZ6g2cBVkqNi8T_pE",
    authDomain: "doctor-app-7aa0d.firebaseapp.com",
    databaseURL: "https://doctor-app-7aa0d.firebaseio.com",
    projectId: "doctor-app-7aa0d",
    storageBucket: "doctor-app-7aa0d.appspot.com",
    messagingSenderId: "796862766796"
  },
  apiUrls: {
    axon: 'http://api-axon.m-sas.com/api',
    directory: 'http://ems-api-dev.m-sas.com/api',
    ams: 'http://ams-api-dev.m-sas.com/api',
    sendIt: 'http://send-it-api-dev.m-sas.com/api',
    inv: 'http://inv-api-dev.m-sas.com/api',
    assets: 'http://assets-api-dev.m-sas.com/api',
    rating: 'http://rating-api-dev.m-sas.com/api',
    welcome: 'http://welcome-api-dev.m-sas.com/api',
    bap: 'http://bap-api-dev.m-sas.com/api',
    vms: 'http://vms-api-dev.m-sas.com/api',
    docs: 'http://docs-api-dev.m-sas.com/api'
  },
  webUrls: {
    ams: 'http://ams-web-dev.m-sas.com',
    sendIt: 'http://send-it-web-dev.m-sas.com',
    docs: 'http://docs-web-dev.m-sas.com',
    inv: 'http://inv-web-dev.m-sas.com',
    assets: 'http://assets-web-dev.m-sas.com',
    welcome: 'http://welcome-web-dev.m-sas.com',
    bap: 'http://bap-web-dev.m-sas.com',
    vms: 'http://vms-web-dev.m-sas.com',
  },
  tenant: {
    code: 'axon',
  },
  tenants: {
    axon: {
      name: 'My MD',
      code: 'axon',
      homeUrl: 'http://localhost:4200',
      joinUrl: 'http://localhost:4200/join',
      logo: 'https://static1.squarespace.com/static/5309226fe4b0c194bcbbfd0d/t/5548e440e4b0cbbc3dff4318/1430840385238/Logo_erp.png'
    }
  },
  service: {
    name: 'Dashboard',
    code: 'dash',
  },
  organization: null,
  // organization: {
  //   id: '12345',
  //   name: 'Guru Kashi University',
  //   code: 'gku',
  //   joinUrl: 'http://localhost:4200/join/gku',
  //   logo: 'http://www.jobsinpunjab.in/wp-content/uploads/2017/12/guru-kashi-university-logo.jpg'
  // },
  login: 'otp',
  name: 'local'
};