# NewsAppChallenge

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.7.

To install Angular CLI and it had recieved any updates.

You can run `npm i -g @angular/cli@13.3.7` in order to install specifically the 13.3.7 CLI version.

## Development server

- First go ahead and create an `.env` file at the root of the project directory and inside of it set the proerties like this example: 
```
NEWS_API_KEY= <Here goes your secret api key>
NEWS_API_URL= <Here goes your api url>
```

- Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

###### The reason why this is not `ng serve` is due to the necesity of running scripts before the server starts. This is because we could have SECRETS in our environment.ts files and we don't want to accidentally leak things. That's why as soon as you run `npm start` it will generate the environment.ts file with all the properties the SPA needs in order to work properly.


<!-- ## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`. -->

## Build
Run `npm build` to build the project. The build artifacts will be stored in the `dist/` directory.
Again the reason why this is not `ng build` is because we want to run a script before the build is done. 

<!-- ## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities. -->

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
