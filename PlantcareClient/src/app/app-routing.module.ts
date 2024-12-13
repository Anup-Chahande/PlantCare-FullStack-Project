import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetallplantsComponent } from './getallplants/getallplants.component';
import { AddplantsComponent } from './addplants/addplants.component';
import { UpdateplantComponent } from './updateplant/updateplant.component';

const routes: Routes = [
{path:'getall',component:GetallplantsComponent},
{path:'addplants',component:AddplantsComponent},
{
  path:'updatees/:id',component:UpdateplantComponent

},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
