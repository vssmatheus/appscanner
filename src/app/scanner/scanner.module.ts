import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ScannerComponent } from './scanner.component';

@NgModule({
    declarations: [ScannerComponent],
    imports: [
      CommonModule,
      ZXingScannerModule
    ]
  })
  export class ScannerModule { }
