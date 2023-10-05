import { Component, OnInit } from '@angular/core';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-camera',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class CameraComponent implements OnInit {
  public devices: MediaDeviceInfo[] = [];
  public webcamImage: WebcamImage | null = null;
  private trigger: Subject<void> = new Subject<void>();

  isCameraActivated = false;
  isCameraError = false;

  constructor() {}

  ngOnInit(): void {
    WebcamUtil.getAvailableVideoInputs().then((mediaDevices: MediaDeviceInfo[]) => {
      this.devices = mediaDevices;
    });
  }

  activateCamera(purpose: string) {
    this.isCameraActivated = true;
    this.isCameraError = false;
  }

  deactivateCamera() {
    this.isCameraActivated = false;
  }

  public toggleCamera(): void {
    this.trigger.next();
  }

  public handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }
}
