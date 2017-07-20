import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ModalBankDetails } from '../pages/modal-bank/modal-bank';

export const firebaseConfig = {
    apiKey: "AIzaSyAkmJxYJwEQqBXsRWqFtGS9Cg4VLCL4QEg",
    authDomain: "todocorn.firebaseapp.com",
    databaseURL: "https://todocorn.firebaseio.com",
    projectId: "todocorn",
    storageBucket: "todocorn.appspot.com",
    messagingSenderId: "24458746814"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ModalBankDetails
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ModalBankDetails
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
