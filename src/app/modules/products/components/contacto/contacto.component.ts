import { Component } from '@angular/core';
import { FormularioService } from '../../services/Formulario.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  constructor(private formularioService: FormularioService){}

  onSubmit() {
    const formData = {
      nombre: (document.querySelector('#nombre') as HTMLInputElement).value,
      telefono: (document.querySelector('#telefono') as HTMLInputElement).value,
      asunto: (document.querySelector('#asunto') as HTMLInputElement).value,
      mensaje: (document.querySelector('#mensaje') as HTMLTextAreaElement).value
    };
    this.formularioService.enviarFormulario(formData);
  }
}
