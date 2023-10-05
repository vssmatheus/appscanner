import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScannerModule } from './scanner/scanner.module';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { CameraComponent } from './camera/camera.component';
import { WebcamModule } from 'ngx-webcam';


@NgModule({
  declarations: [
    AppComponent,
    CameraComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScannerModule,  
    ZXingScannerModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
