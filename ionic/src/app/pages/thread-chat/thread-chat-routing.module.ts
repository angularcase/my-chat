import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ThreadChatPage } from './thread-chat.page';

const routes: Routes = [
  { path: '', component: ThreadChatPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThreadChatPageRoutingModule {}
