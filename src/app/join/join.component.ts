import { Component } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

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
      'email': ['', Validators.required],
      'kind': ['', Validators.required],
      'level': ['', Validators.required],
      'location': ['', Validators.required],
      'comments': ['']
    });
  }

  constructor(private fb: FormBuilder) {
    this.initForm();
  }

  sendMail() {
    if (this.joinForm.valid) {
      const { name, surname, birthdate, phone, email, kind, level, location, comments } = this.joinForm.value;
      const mailTemplate =
        `Buenos dias:%0D%0A` +
        `Me gustaria inscribir a ${name} ${surname}, con fecha de nacimiento ${birthdate} en la modalidad ${kind} ${level}.%0D%0A` +
        `Sería para el grupo de ${location}.%0D%0A` +
        `Mi email es ${email} y mi teléfono ${phone}.%0D%0A` +
        `${comments}%0D%0A` +
        `Gracias!`;
      const emailLink = `mailto:info@onskates.com?subject=Inscripcion&body=${mailTemplate}`;
      const mailLink = document.createElement('a');
      mailLink.href = emailLink;
      mailLink.click();
    }
  }


}
