import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner';
import { BarcodeFormat } from '@zxing/library';

@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.component.html',
  styleUrls: ['./scanner.component.scss']
})
export class ScannerComponent implements OnInit {
  @ViewChild('scanner', { static: false }) scanner!: ZXingScannerComponent;
  @ViewChild('video', { static: false }) video!: ElementRef;

  isCameraActivated = false;
  isCameraError = false;
  capturedImage!: string;
  formats: BarcodeFormat[] = [BarcodeFormat.QR_CODE];

  ngOnInit() {
    //
  }

  activateCamera(purpose: string) {
    this.isCameraActivated = true;
    this.isCameraError = false;
  }

  deactivateCamera() {
    this.isCameraActivated = false;
  }

  handleQrCodeResult(event: any) {
    console.log('QR Code Result:', event);
    // Você pode tomar a ação desejada com o resultado do código QR aqui
  }

  takePicture() {
    if (this.video && this.video.nativeElement) {
      const videoElement = this.video.nativeElement;
      const canvas = document.createElement('canvas');
      canvas.width = videoElement.videoWidth;
      canvas.height = videoElement.videoHeight;
      const context = canvas.getContext('2d');
      context!.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
      const imageAsBase64 = canvas.toDataURL('image/jpeg');
      this.capturedImage = imageAsBase64;
  
      // Certifique-se de que a câmera seja desativada após a captura da imagem
      this.deactivateCamera();
    }
  }
  
}
