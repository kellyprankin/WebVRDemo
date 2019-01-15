import { Component, OnInit } from '@angular/core';
import { WebVRUtilityService } from '../../services/web-vrutility.service';

@Component({
  selector: 'app-webvr',
  templateUrl: './webvr.component.html',
  styleUrls: ['./webvr.component.scss']
})
export class WebVRComponent implements OnInit {
  constructor(private webVRUtilityService: WebVRUtilityService) {}

  ngOnInit() {
    this.webVRUtilityService.reportDisplays();
  }
}
