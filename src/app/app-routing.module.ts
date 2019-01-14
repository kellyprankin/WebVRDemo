import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebVRComponent } from './webvr/webvr.component';

const routes: Routes = [{ path: '', component: WebVRComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
