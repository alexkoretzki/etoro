import {Injectable} from '@angular/core';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';

@Injectable({
  providedIn: 'root',
})
export class FingerPrintAuthanticationService {
  constructor(private faio: FingerprintAIO) {}
  showFingerPrintAuth(): Promise<any> {
    return this.faio.show({
      title: 'Biometric Authentication',
      description: 'Please authenticate to complete deposit',
      fallbackButtonTitle: 'Use Backup',
      disableBackup: true,
    });
    // .then((result: any) => console.log(result))
    // .catch((error: any) => console.log(error));
  }
}
