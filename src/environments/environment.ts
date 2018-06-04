// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCOQ7LJPKYNWXXkU4JrdWzrh2KnmeW7MYo",
    authDomain: "mychat-3b4d1.firebaseapp.com",
    databaseURL: "https://mychat-3b4d1.firebaseio.com",
    projectId: "mychat-3b4d1",
    storageBucket: "mychat-3b4d1.appspot.com",
    messagingSenderId: "847901628850"
  }
};
