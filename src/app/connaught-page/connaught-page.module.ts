import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnaughtPagePageRoutingModule } from './connaught-page-routing.module';

import { ConnaughtPagePage } from './connaught-page.page';
import { ConnaughtCountiesPageModule } from '../connaught-counties/connaught-counties.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnaughtPagePageRoutingModule,
    ConnaughtCountiesPageModule
  ],
  declarations: [ConnaughtPagePage]
})
export class ConnaughtPagePageModule {}
