import { Component } from '@angular/core';
import {
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  testFormControl = new FormControl('', [Validators.required]);
  testFormControl2 = new FormControl('', [Validators.required]);
  testFormControl3 = new FormControl('', [Validators.required]);
  testFormControl4 = new FormControl('', [Validators.required]);
  testFormControl5 = new FormControl('', [Validators.required]);
  testFormControl6 = new FormControl('', [Validators.required]);
  testFormControl7 = new FormControl('', [Validators.required]);
}
