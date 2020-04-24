import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegistrazioneComponent } from './components/registration/registration.component';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CardsComponent } from './components/cards/cards.component';


const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'registrati', component: RegistrazioneComponent},
    { path: 'list', component: ListComponent },
    { path: 'home', component: HomeComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: 'cards', component: CardsComponent },

    { path: '', redirectTo: '/login', pathMatch: 'full'},

];

@NgModule ({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }



