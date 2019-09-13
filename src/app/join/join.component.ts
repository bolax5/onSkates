import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { AppDateAdapter, APP_DATE_FORMATS } from '../core/utils/date-parser';
import { DateAdapter, MAT_DATE_FORMATS, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent {
  joinForm: FormGroup;
  initForm() {
    this.joinForm = this.fb.group({
      'name': ['', Validators.required],
      'surname': ['', Validators.required],
      'birthdate': ['', Validators.required],
      'phone': ['', Validators.required],
      'email': ['', [Validators.required, Validators.email]],
      'kind': ['', Validators.required],
      'level': ['', Validators.required],
      'location': ['', Validators.required],
      'comments': ['']
    });
  }

  constructor(private dialogRef: MatDialogRef<JoinComponent>, private fb: FormBuilder) {
    this.initForm();
    this.joinForm.get('kind').valueChanges.subscribe((val) => {
      if (val === 'DUDA') {
        this.goToCategories();
      }
    });
  }

  sendMail() {
    if (this.joinForm.valid) {
      const { name, surname, birthdate, phone, email, kind, level, location, comments } = this.joinForm.value;
      const event = new Date(birthdate);

      const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };

      const birthParsed = event.toLocaleString('es', options);
      const mailTemplate =
        `Buenos dias:%0D%0A` +
        `Me gustaria inscribir a ${name} ${surname}, con fecha de nacimiento a ${birthParsed}, en la modalidad ${kind} ${level}.%0D%0A` +
        `Sería para el grupo de ${location}.%0D%0A` +
        `Mi email es ${email} y mi teléfono ${phone}.%0D%0A` +
        `${comments}%0D%0A` +
        `Gracias!`;
      const emailLink = `mailto:info@onskates.com?subject=Inscripcion&body=${mailTemplate}`;
      const mailLink = document.createElement('a');
      mailLink.href = emailLink;
      mailLink.click();
      this.dialogRef.close();
    }
  }
  goToCategories() {
    const yourElement = document.getElementById('categories');
    const yCoordinate = yourElement.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -60;

    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: 'smooth'
    });
  }


}
