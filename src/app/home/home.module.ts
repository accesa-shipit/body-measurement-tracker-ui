import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import {FormsModule} from '@angular/forms';
import {HomeRoutingModule} from './home-routing.module';
import { NavbarComponent } from './navbar/navbar.component';
import { MeasurementComponent } from './measurement/measurement.component';
import { ScreeningComponent } from './profile/extra/screening/screening.component';
import { NutritionComponent } from './profile/extra/nutrition/nutrition.component';
import { ExercisesComponent } from './profile/extra/exercises/exercises.component';
import { MessagesComponent } from './profile/extra/messages/messages.component';
import { GoalsComponent } from './profile/extra/goals/goals.component';
import {jqxChartComponent} from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { SchedulerComponent } from './scheduler/scheduler.component';
import {MaterialModule} from '../material.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, HomeRoutingModule, MaterialModule
  ],
  declarations: [HomeComponent,
    NavbarComponent,
    MeasurementComponent,
    ScreeningComponent,
    NutritionComponent,
    ExercisesComponent,
    MessagesComponent,
    GoalsComponent,
    jqxChartComponent]
})
export class HomeModule { }
