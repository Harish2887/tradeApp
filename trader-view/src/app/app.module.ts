import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { NiftyComponent } from './components/nifty/nifty.component';
import { Nifty50Service } from './services/nifty-50.service';

const appRoutes: Routes = [
  { path: 'nifty', component: NiftyComponent },
  //{ path: 'niftyAll/',   component: HeroDetailComponent },
//  {
//    path: 'heroes',
 //   component: HeroListComponent,
 //   data: { title: 'Heroes List' }
 // },
  { path: '',
    redirectTo: '/nifty',
    pathMatch: 'full'
  },
 // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    NiftyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [Nifty50Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
