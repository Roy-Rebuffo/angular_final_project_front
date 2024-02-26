import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormularioService {
  private formularioSubject = new Subject<any>();

  enviarFormulario(data: any) {
    this.formularioSubject.next(data);
  }

  obtenerFormulario() {
    return this.formularioSubject.asObservable();
  }
}
