import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { LoginComponent } from './login/login';
import {CommonModule} from "@angular/common";
import {IonicModule} from "ionic-angular";
@NgModule({
	declarations: [LoginComponent],
	imports: [IonicModule, CommonModule],
	exports: [LoginComponent],
	schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ComponentsModule {}
