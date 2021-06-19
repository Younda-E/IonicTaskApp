import { Component } from '@angular/core';
import { LottieSplashScreen } from '@ionic-native/lottie-splash-screen/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor( private lottieSplashScreen: LottieSplashScreen) {}
}
