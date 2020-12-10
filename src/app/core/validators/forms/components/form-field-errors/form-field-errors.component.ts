import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, ValidationErrors} from '@angular/forms';

@Component({
  selector: 'app-form-field-errors',
  templateUrl: './form-field-errors.component.html',
  styleUrls: ['./form-field-errors.component.scss'],
})
export class FormFieldErrorsComponent implements OnInit {
  @Input() control: AbstractControl;
  constructor() {}
  get errors(): any[] {
    if (!this.control.errors) {
      return [];
    }
    const errosObj = this.control.errors;
    return Object.keys(errosObj).map((key) => {
      return errosObj[key];
    });
  }
  ngOnInit() {}
}
