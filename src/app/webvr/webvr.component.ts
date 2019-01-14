import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webvr',
  templateUrl: './webvr.component.html',
  styleUrls: ['./webvr.component.scss']
})
export class WebVRComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    var list = document.querySelector('ul');
    var info = document.querySelector('p');
    if (navigator.getVRDisplays) {
      reportDisplays();
    } else {
      info.textContent = 'WebVR API not supported by this browser.';
    }
    function reportDisplays() {
      navigator.getVRDisplays().then(function(displays) {
        for (var i = 0; i < displays.length; i++) {
          var cap = displays[i].capabilities;
          // cap is a VRDisplayCapabilities object
          var listItem = document.createElement('li');
          listItem.innerHTML =
            '<strong>Display ' +
            (i + 1) +
            '</strong>' +
            '<br>VR Display ID: ' +
            displays[i].displayId +
            '<br>VR Display Name: ' +
            displays[i].displayName +
            '<br>Display can present content: ' +
            cap.canPresent +
            "<br>Display is separate from the computer's main display: " +
            cap.hasExternalDisplay +
            '<br>Display can return position info: ' +
            cap.hasPosition +
            '<br>Display can return orientation info: ' +
            cap.hasOrientation +
            '<br>Display max layers: ' +
            cap.maxLayers;
          list.appendChild(listItem);
        }
      });
    }
    // Clear the list when needed
    function clearList() {
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
    }
    // Events
    // supported in Firefox and Chrome
    window.addEventListener('vrdisplaypresentchange', function(event: Event) {
      var vrDisplay = event.target as VRDisplay;

      if (vrDisplay.isPresenting) {
        info.textContent = 'Display has started presenting.';
      } else {
        info.textContent = 'Display has stopped presenting.';
      }
      clearList();
      reportDisplays();
    });
    window.addEventListener('vrdisplayconnect', function() {
      info.textContent = 'Display connected.';
      clearList();
      reportDisplays();
    });
    window.addEventListener('vrdisplaydisconnect', function() {
      info.textContent = 'Display disconnected.';
      clearList();
      reportDisplays();
    });
    window.addEventListener('vrdisplayactivate', function() {
      info.textContent = 'Display activated.';
      clearList();
      reportDisplays();
    });
    window.addEventListener('vrdisplaydeactivate', function() {
      info.textContent = 'Display deactivated.';
      clearList();
      reportDisplays();
    });
    // Listed in 1.1 spec, but currently don't seem to work anywhere
    window.addEventListener('vrdisplayblur', function() {
      info.textContent = 'Display unfocused.';
      clearList();
      reportDisplays();
    });
    window.addEventListener('vrdisplayfocus', function() {
      info.textContent = 'Display focused.';
      clearList();
      reportDisplays();
    });
  }
}
