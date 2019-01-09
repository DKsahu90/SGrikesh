 import { BrowserModule } from '@angular/platform-browser';
import{FormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { EmpDetailsComponent } from './emp-details/emp-details.component';
import { LogInComponent } from './log-in/log-in.component';
import {ScoreGeniusService} from './Services/score-genius.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationformComponent } from './registrationform/registrationform.component';
import { FatchEmpdetailsComponent } from './fatch-empdetails/fatch-empdetails.component'



@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    EmpDetailsComponent,
    LogInComponent,
    DashboardComponent,
    RegistrationformComponent,
    FatchEmpdetailsComponent,
    
   
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', redirectTo:'log-in', pathMatch: 'full' },    
      { path: 'log-in', component: LogInComponent },
      { path: 'home', component: HomeComponent },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
      { path: 'emp-details', component: EmpDetailsComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'fatch-empdetails', component: FatchEmpdetailsComponent },
      { path: 'registrationform', component: RegistrationformComponent },
      
    ])
  ],
  providers: [ScoreGeniusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
