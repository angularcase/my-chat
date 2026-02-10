import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ChatSpacesPageRoutingModule } from './chat-spaces-routing.module';
import { ChatSpacesPage } from './chat-spaces.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    ChatSpacesPageRoutingModule,
  ],
  declarations: [ChatSpacesPage],
})
export class ChatSpacesPageModule {}
