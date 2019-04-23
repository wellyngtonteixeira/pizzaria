import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddPedidoPage } from './add-pedido';

@NgModule({
  declarations: [
    AddPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddPedidoPage),
  ],
})
export class AddPedidoPageModule {}
