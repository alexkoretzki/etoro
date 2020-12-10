import {FingerPrintAuthanticationService} from './../../core/authantication/finger-print-authantication/finger-print-authantication.service';
import {CustomeValidators} from './../../core/validators/error.validator';
import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {createStore, KeysData} from 'key-store';
import {KeyStoreService} from 'src/app/core/key-store/key-store.service';

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss'],
})
export class DepositComponent implements OnInit {
  depositForm: FormGroup;
  isSubmitted = false;
  constructor(
    private fb: FormBuilder,
    private fingerPrintAuthanticationService: FingerPrintAuthanticationService,
    private keyStoreService: KeyStoreService
  ) {}

  ngOnInit() {
    this.depositForm = this.fb.group({
      email: ['', [CustomeValidators.customEmailValidator]],
      amount: [
        '',
        [CustomeValidators.isNumber, CustomeValidators.isGreaterThanZero],
      ],
    });
  }

  get email(): AbstractControl {
    return this.depositForm.get('email');
  }
  get amount(): AbstractControl {
    return this.depositForm.get('amount');
  }
  onSubmit(e) {
    this.isSubmitted = true;
    if (this.depositForm.valid) {
      this.fingerPrintAuthanticationService
        .showFingerPrintAuth()
        .then((result: any) => {
          alert('deposit accepted');
          this.keyStoreService.set({
            email: this.email.value,
            amount: this.amount.value,
          });
        })
        .catch((error: any) => alert(alert('authantication error')));
    }
  }
}
