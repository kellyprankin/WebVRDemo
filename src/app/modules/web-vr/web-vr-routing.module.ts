import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebVRComponent } from './components/webvr/webvr.component';

const routes: Routes = [{ path: 'webvr', component: WebVRComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebVRRoutingModule {}
