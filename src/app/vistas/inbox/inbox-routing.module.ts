import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InboxPage } from './inbox.page';

const routes: Routes = [
  {
    path: '',
    component: InboxPage
  },

];

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InboxPageRoutingModule {}
