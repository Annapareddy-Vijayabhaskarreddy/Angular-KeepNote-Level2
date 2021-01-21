import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from 'E:\\challenges\\FRONTEND\\Angular\\firstexp\\angular-keep-level-2-assignment\\src\\app\\login\\login.component';
import { DashboardComponent } from 'E:\\challenges\\FRONTEND\\Angular\\firstexp\\angular-keep-level-2-assignment\\src\\app\\dashboard\\dashboard.component';


const routes: Routes = [{
  path:'',component:DashboardComponent
},
{path:'dashboard',component:DashboardComponent},
{path:'login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
