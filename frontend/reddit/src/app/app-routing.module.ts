import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './components/principal/principal.component';
import { ThemeComponent } from './components/theme/theme.component';

const routes: Routes = [
  {path: '', component: PrincipalComponent},
  {path: 'theme/:id', component: ThemeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
