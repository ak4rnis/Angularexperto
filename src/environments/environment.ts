// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  name: 'default',
  firebase: {
    config : {

      apiKey: "AIzaSyBbGZ-5oYj6yskjCgVAd_sANhxm2tURPhc",
    
      authDomain: "angularnet7.firebaseapp.com",
    
      projectId: "angularnet7",
    
      storageBucket: "angularnet7.appspot.com",
    
      messagingSenderId: "441734184734",
    
      appId: "1:441734184734:web:36765430b3fb2ec224130f"
    
    }
  },
  actionCodeSettings: {
    url: 'http://localhost:5200/profile/new',
    handleCodeInApp: true
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
