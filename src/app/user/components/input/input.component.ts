import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: []
})
export class InputComponent {

  @Input() valueForm: string = '';

  constructor() { }

}
