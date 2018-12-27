export const environment = {
  production: true,
  firebase: {
    apiKey: "AIzaSyBeGZJXRZCr6zfV00bZ6g2cBVkqNi8T_pE",
    authDomain: "doctor-app-7aa0d.firebaseapp.com",
    databaseURL: "https://doctor-app-7aa0d.firebaseio.com",
    projectId: "doctor-app-7aa0d",
    storageBucket: "doctor-app-7aa0d.appspot.com",
    messagingSenderId: "796862766796"
  },
  apiUrls: {
    axon: 'http://axon-api.mindfulsas.com/api',
    directory: 'http://directory-api.mindfulsas.com/api',
    ams: 'http://ams-api.mindfulsas.com/api',
    sendIt: 'http://send-it-api.mindfulsas.com/api',
    inv: 'http://inv-api.mindfulsas.com/api',
    assets: 'http://assets-api.mindfulsas.com/api',
    rating: 'http://rating-api.mindfulsas.com/api',
    welcome: 'http://welcome-api.mindfulsas.com/api',
    bap: 'http://bap-api.mindfulsas.com/api',
    vms: 'http://vms-api.mindfulsas.com/api',
    docs: 'http://docs-api.mindfulsas.com/api'
  },
  webUrls: {
    ams: 'http://ams.mindfulsas.com',
    sendIt: 'http://send-it.mindfulsas.com',
    docs: 'http://docs.mindfulsas.com',
    inv: 'http://inv.mindfulsas.com',
    assets: 'http://assets.mindfulsas.com',
    welcome: 'http://welcome.mindfulsas.com',
    bap: 'http://bap.mindfulsas.com',
    vms: 'http://vms.mindfulsas.com',
  },
  tenant: {
    code: 'axon',
  },
  tenants: {
    axon: {
      name: 'My MD',
      code: 'axon',
      homeUrl: 'http://axon.mindfulsas.com',
      joinUrl: 'http://axon.mindfulsas.com/join',
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
  name: 'prod'
};
