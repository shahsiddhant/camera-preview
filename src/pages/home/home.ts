import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { CameraPreview, CameraPreviewPictureOptions, CameraPreviewOptions, CameraPreviewDimensions } from '@ionic-native/camera-preview';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {




  constructor(
    public navCtrl: NavController,
    private cameraPreview: CameraPreview,
    private platform: Platform
  ) {
    this.platform.ready().then(() => {
      let options = {
        x: 0,
        y: 0,
        width: window.screen.width,
        height: window.screen.height,
        camera: 'rear',
        tapPhoto: true,
        previewDrag: true,
        toBack: true,
      }
      this.cameraPreview.startCamera(options).then(
        (res) => {
          console.log(res)
        },
        (err) => {
          console.log('err', err)
        });
    })

  }
}
