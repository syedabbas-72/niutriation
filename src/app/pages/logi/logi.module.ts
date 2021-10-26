import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LogiPageRoutingModule } from './logi-routing.module';

import { LogiPage } from './logi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LogiPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [LogiPage]
})
export class LogiPageModule {}
