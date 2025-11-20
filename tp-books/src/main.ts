import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { BookContainerComponent } from './app/components/book-container/book-container.component';

bootstrapApplication(BookContainerComponent, appConfig)
  .catch((err) => console.error(err));
