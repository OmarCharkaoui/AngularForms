import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TDFormComponent } from './TemplateDravenForm/tdform.component';
import { RFormComponent } from './ReactiveForm/rform.component';


const routes: Routes = [
  {path: '', redirectTo: 'template', pathMatch: 'full'},
  {path: 'template', component: TDFormComponent},
  {path: 'reactive', component: RFormComponent},
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
