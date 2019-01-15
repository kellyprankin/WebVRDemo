import { Injectable, Inject } from '@angular/core';
import { fromEvent, from, Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class WebVRUtilityService {
  constructor(
    @Inject('Navigator') private navigator: Navigator,
    @Inject('Window') private window: Window
  ) {}

  public reportDisplays(): void {
    this.hasDisplays().subscribe(hasDisplays =>
      hasDisplays
        ? this.showDisplayData()
        : console.log('WebVR API not supported by this browser.')
    );
  }

  private hasDisplays(): Observable<boolean> {
    return from(this.navigator.getVRDisplays()).pipe(
      switchMap(vrDisplays => {
        return of(vrDisplays.length > 0);
      })
    );
  }

  private showDisplayData(): void {
    from(this.navigator.getVRDisplays()).subscribe(vrDisplays =>
      vrDisplays.forEach(display => {
        this.showBasicDisplayData(display);
        this.showDisplayCapabilities(display.capabilities);
      })
    );
  }

  private showBasicDisplayData(display: VRDisplay): void {
    console.log(`VR Display ID: ${display.displayId}`);
    console.log(`VR Display Name: ${display.displayName}`);
  }

  private showDisplayCapabilities(capabilities: VRDisplayCapabilities): void {
    console.log(`Display can present content: ${capabilities.canPresent}`);
    console.log(`Display is not main: ${capabilities.hasExternalDisplay}`);
    console.log(`Display can return position: ${capabilities.hasPosition}`);
    console.log(
      `Display can return orientation: ${capabilities.hasOrientation}`
    );
    console.log(`Display max layers: ${capabilities.maxLayers}`);
  }

  public setupEventListeners(): void {
    // supported in Firefox and Chrome
    fromEvent(this.window, 'vrdisplaypresentchange').subscribe(
      (event: VRDisplayEvent) => {
        (event.target as VRDisplay)
          ? console.log('Display has started presenting.')
          : console.log('Display has stopped presenting.');
      }
    );

    fromEvent(this.window, 'vrdisplayconnect').subscribe(() => {
      console.log('Display connected.');
      this.showDisplayData();
    });

    fromEvent(this.window, 'vrdisplaydisconnect').subscribe(() => {
      console.log('Display disconnected.');
      this.showDisplayData();
    });

    fromEvent(this.window, 'vrdisplayactivate').subscribe(() => {
      console.log('Display activated.');
      this.showDisplayData();
    });

    fromEvent(this.window, 'vrdisplaydeactivate').subscribe(() => {
      console.log('Display deactivated.');
      this.showDisplayData();
    });

    // Listed in 1.1 spec, but currently don't seem to work anywhere
    fromEvent(this.window, 'vrdisplayblur').subscribe(() => {
      console.log('Display unfocused.');
      this.showDisplayData();
    });
  }
}
