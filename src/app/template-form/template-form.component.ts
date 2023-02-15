import { Component } from '@angular/core';


@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.scss'],
})
export class TemplateFormComponent {
  countryList: any = [
    {
      id: 1,
      country: 'india',
    },
    {
      id: 2,
      country: 'US',
    },
    {
      id: 3,
      country: 'England',
    },
  ];
  onSubmit(form: any) {
    console.log(form.value);
  }
}
