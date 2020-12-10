// tslint:disable-next-line: max-line-length
import {FingerPrintAuthanticationService} from './../../core/authantication/finger-print-authantication/finger-print-authantication.service';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DepositComponent} from './deposit.component';
import {DepositRoutingModule} from './deposit-routing.module.';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FingerprintAIO} from '@ionic-native/fingerprint-aio/ngx';
import {FormFieldErrorsModule} from 'src/app/core/validators/forms/components/form-field-errors/form-field-errors.module';
import {KeyStoreService} from 'src/app/core/key-store/key-store.service';
import {SecureStorageEcho} from '@ionic-native/secure-storage-echo/ngx';

@NgModule({
  declarations: [DepositComponent],
  imports: [
    CommonModule,
    DepositRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FormFieldErrorsModule,
  ],
  exports: [DepositComponent],
  providers: [
    FingerprintAIO,
    SecureStorageEcho,
    FingerPrintAuthanticationService,
    KeyStoreService,
  ],
})
export class DepositModule {}
