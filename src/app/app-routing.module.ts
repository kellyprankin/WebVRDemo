import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WebVRComponent } from './modules/web-vr/components/webvr/webvr.component';
import { WebVRModule } from './modules/web-vr/web-vr.module';

const routes: Routes = [{ path: '', component: WebVRComponent }];

@NgModule({
  imports: [WebVRModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
