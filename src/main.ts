import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializeApp } from 'firebase/app';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
const firebaseConfig = {
  apiKey: "AIzaSyDTb4_yZKrBtFl8JEX0vkxhacSBwkmBZmU",
  authDomain: "nutrition-c3d24.firebaseapp.com",
  projectId: "nutrition-c3d24",
  storageBucket: "nutrition-c3d24.appspot.com",
  messagingSenderId: "297370135074",
  appId: "1:297370135074:web:632e2d1f62a6650e27f87b",
  measurementId: "G-6MM949VQY7"
};
const app = initializeApp(firebaseConfig);
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
