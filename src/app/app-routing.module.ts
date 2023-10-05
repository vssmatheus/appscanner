import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScannerComponent } from './scanner/scanner.component';
import { CameraComponent } from './camera/camera.component';

const routes: Routes = [
  { path: '', redirectTo: '/camera', pathMatch: 'full' },
  { path: 'scanner', component: ScannerComponent },
  { path: 'camera', component: CameraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
