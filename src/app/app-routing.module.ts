import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegistrazioneComponent } from './components/registration/registration.component';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './components/home/home.component';
import { DetailComponent } from './components/detail/detail.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { CardsComponent } from './components/cards/cards.component';
import { GuardService } from './services/guard.service';
import { LoginGuardGuard } from './services/login-guard.guard';



//import { CardsComponent } from './components/cards/cards.component';
//questi sono i routes base man mano che create le cose e vi servono scommentate queste qua sotto e modificatele a piacimento

const routes: Routes = [
    { path: 'login', component: LoginComponent, canActivate:[LoginGuardGuard]  },
      { path: 'registrati', component:RegistrazioneComponent, canActivate:[LoginGuardGuard]  },
      { path: 'list', component: ListComponent, canActivate:[GuardService] },
      { path: 'home', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule)},
      {path: 'profile' , component:ProfileComponent, canActivate:[GuardService]},
      { path: 'feedback', component: FeedbackComponent, canActivate:[GuardService] },
      { path: 'cards', component: CardsComponent , canActivate:[GuardService]},
      { path: 'detail/:id', component: DetailComponent, canActivate:[GuardService] },
      { path: '', redirectTo: '/login', pathMatch: 'full'},
];


@NgModule ({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})

export class AppRoutingModule { }



