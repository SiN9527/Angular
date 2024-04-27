import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ViewComponent } from './table/view/view.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  //
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule

  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
