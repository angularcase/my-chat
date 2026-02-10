import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ThreadChatPageRoutingModule } from './thread-chat-routing.module';
import { ThreadChatPage } from './thread-chat.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ThreadChatPageRoutingModule,
  ],
  declarations: [ThreadChatPage],
})
export class ThreadChatPageModule {}
