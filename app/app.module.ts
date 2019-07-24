import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { Tab1Page } from './pages/tab1/tab1.page';
import { Tab2Page } from './pages/tab2/tab2.page';
import { TabsPage } from './pages/tabs/tabs.page';

import { AgregarPage } from './pages/agregar/agregar.page';

// servicios
import { DeseosService } from './services/deseos.service';

// importar rutas
import { ROUTES } from './app.routes';

//<--- Modulo de rutas
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    MyApp,
    Tab1Page,
    Tab2Page,
    TabsPage,
    AgregarPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RouterModule.forRoot(ROUTES, {useHash:true})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Tab1Page,
    Tab2Page,
    TabsPage,
    AgregarPage
  ],
  providers: [
    DeseosService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
