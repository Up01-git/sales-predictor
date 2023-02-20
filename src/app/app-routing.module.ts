import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MainPageComponent } from './main-page/main-page.component';
import { InstructionComponent } from './instruction/instruction.component';
import { CalculateComponent } from './calculate/calculate.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent},
  { path: 'mainpage', component: MainPageComponent},
  { path: 'instructions', component: InstructionComponent},
  { path: 'calculate', component: CalculateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const ConponentList = [LoginComponent, MainPageComponent, InstructionComponent, CalculateComponent];
