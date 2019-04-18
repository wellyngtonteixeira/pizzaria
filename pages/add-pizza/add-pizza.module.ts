import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPizzaPage } from './add-pizza';

@NgModule({
  declarations: [
    AddPizzaPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPizzaPage),
  ]
})
export class AddPizzaPageModule {}
