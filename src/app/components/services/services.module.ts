import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { ServicesComponent } from './services.component';
import { MatCardModule } from '@angular/material/card';
import { FrontendComponent } from './frontend/frontend.component';
import { BackendComponent } from './backend/backend.component';


@NgModule({
  declarations: [
    ServicesComponent,
    FrontendComponent,
    BackendComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule,
    MatCardModule
  ]
})
export class ServicesModule { }
