import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BuscaPedidoPage } from './busca-pedido';
import {IonicSelectableModule} from "ionic-selectable";

@NgModule({
  declarations: [
    BuscaPedidoPage,
  ],
  imports: [
    IonicPageModule.forChild(BuscaPedidoPage),
    IonicSelectableModule,
  ],
})
export class BuscaPedidoPageModule {}
