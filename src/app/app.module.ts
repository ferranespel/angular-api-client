import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { routing, appRoutingProviders } from './app.routing';


// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { RegiterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegiterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
