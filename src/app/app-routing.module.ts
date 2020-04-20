import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { ListaComponent } from './lista/lista/lista.component';
import { LoginComponent } from './components/login/login.component';
import { EditGuardService } from './services/edit-guard.service';
import { GuardService } from './services/guard.service';
import { RegistrazioneComponent } from './components/registration/registration.component';
import { ListComponent } from './components/list/list.component';
//questi sono i routes base man mano che create le cose e vi servono scommentate queste qua sotto e modificatele a piacimento
const routes: Routes = [
    { path: 'login', component: LoginComponent },
      { path: 'registrati', component:RegistrazioneComponent, canActivate: [EditGuardService]},
      { path: '', redirectTo: '/registrati', pathMatch: 'full' },
      { path: 'list', component: ListComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
