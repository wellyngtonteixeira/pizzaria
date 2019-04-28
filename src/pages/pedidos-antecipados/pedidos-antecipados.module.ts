import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PedidosAntecipadosPage } from './pedidos-antecipados';

@NgModule({
  declarations: [
    PedidosAntecipadosPage,
  ],
  imports: [
    IonicPageModule.forChild(PedidosAntecipadosPage),
  ],
})
export class PedidosAntecipadosPageModule {}
