import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChatSpacesPage } from './chat-spaces.page';

const routes: Routes = [
  { path: '', component: ChatSpacesPage },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatSpacesPageRoutingModule {}
