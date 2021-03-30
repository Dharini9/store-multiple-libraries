import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsStore } from './store-akita/user-details.store';
import { UserDetailsQuery } from './store-akita/user-details.query';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    UserDetailsStore
  ]
})
export class StoreAkitaModule { }
