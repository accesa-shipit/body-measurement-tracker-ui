import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {MeasurementComponent} from './measurement/measurement.component';
import {ScreeningComponent} from './profile/extra/screening/screening.component';
import {AnamnesisComponent} from './profile/extra/anamnesis/anamnesis.component';
import {NutritionComponent} from './profile/extra/nutrition/nutrition.component';
import {ExercisesComponent} from './profile/extra/exercises/exercises.component';
import {MessagesComponent} from './profile/extra/messages/messages.component';
import {GoalsComponent} from './profile/extra/goals/goals.component';
import {SchedulerComponent} from './scheduler/scheduler.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {PricingComponent} from './pricing/pricing.component';
import {PrivacyComponent} from './privacy/privacy.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      {path: '', redirectTo: '/home/measurement', pathMatch: 'full'},
      {
        path: 'measurement', component: MeasurementComponent, children: [

          {path: 'screening', component: ScreeningComponent, outlet: 'extra'},
          {outlet: 'extra', path: 'anamnesis', component: AnamnesisComponent},
          {outlet: 'extra', path: 'nutrition', component: NutritionComponent},
          {outlet: 'extra', path: 'exercises', component: ExercisesComponent},
          {outlet: 'extra', path: 'messages', component: MessagesComponent},
          {outlet: 'extra', path: 'goals', component: GoalsComponent}


        ]
      },
      {path: 'scheduler', component: SchedulerComponent},
      {path: 'pricing', component: PricingComponent},
      {path: 'statistics', component: StatisticsComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'privacy', component: PrivacyComponent}

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
