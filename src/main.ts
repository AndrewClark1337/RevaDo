import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';



//bootstrapApplication is the entry point for Angular applications. 
// It takes the root component and the configuration object as arguments and bootstraps the application.

//appConfig provides global configuration for the application, such as providers, imports, and other settings.
bootstrapApplication(App, appConfig)
  .catch((err) => console.error(err));
