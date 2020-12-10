import {
  SecureStorageEcho,
  SecureStorageEchoObject,
} from '@ionic-native/secure-storage-echo/ngx';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class KeyStoreService {
  private _storage;
  constructor(private secureStorageEcho: SecureStorageEcho) {
    this.secureStorageEcho.create('app-storage').then((storage) => {
      this._storage = storage;
    });
  }
  set(data): void {
    this._storage.set('deposit', JSON.stringify(data)).then(
      (data) => {
        alert(`data is saved`);
      },
      (error) => alert(error)
    );
  }
}
