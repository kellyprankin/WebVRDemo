import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebVRRoutingModule } from './web-vr-routing.module';

import { WebVRComponent } from './components/webvr/webvr.component';
import { WebVRUtilityService } from './services/web-vrutility.service';

@NgModule({
  declarations: [WebVRComponent],
  providers: [
    { provide: 'Navigator', useValue: navigator }, //vr displays object
    { provide: 'Window', useValue: window },
    WebVRUtilityService
  ],
  imports: [CommonModule, WebVRRoutingModule],
  exports: [WebVRComponent]
})
export class WebVRModule {}
