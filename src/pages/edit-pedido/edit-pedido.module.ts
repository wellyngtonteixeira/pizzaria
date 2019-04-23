import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPedidoPage } from './edit-pedido';

@NgModule({
  declarations: [
    EditPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPedidoPage),
  ],
})
export class EditPedidoPageModule {}
