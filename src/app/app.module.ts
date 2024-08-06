import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './AboutComponent/about/about.component';
import { FooterComponent } from './footer/footer/footer.component';
import { ProfitPipe } from './pipes/profit.pipe';

import { UserAuthModule } from './user-auth/user-auth.module';
import { ContactComponent } from './Contact/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    FooterComponent,
    ProfitPipe,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UserAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
