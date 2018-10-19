import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {MeasurementComponent} from './measurement/measurement.component';
import {ScreeningComponent} from './profile/extra/screening/screening.component';
import {AnamnesisComponent} from './profile/extra/anamnesis/anamnesis.component';
import {NutritionComponent} from './profile/extra/nutrition/nutrition.component';
import {ExercisesComponent} from './profile/extra/exercises/exercises.component';
import {MessagesComponent} from './profile/extra/messages/messages.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      {path: '', redirectTo: '/home/measurement', pathMatch: 'full'},
      {path: 'measurement', component: MeasurementComponent, children: [

  {path: 'screening', component: ScreeningComponent, outlet: 'extra'},
  {outlet: 'extra', path: 'anamnesis', component: AnamnesisComponent},
  {outlet: 'extra', path: 'nutrition', component: NutritionComponent},
  {outlet: 'extra', path: 'exercises', component: ExercisesComponent},
  {outlet: 'extra', path: 'messages', component: MessagesComponent}



]}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
