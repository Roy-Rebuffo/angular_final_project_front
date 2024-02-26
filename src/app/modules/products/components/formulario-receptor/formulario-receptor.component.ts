// import { Component, OnDestroy } from '@angular/core';
// import { Subscription } from 'rxjs';
// import { FormularioService } from '../../services/Formulario.service';


// @Component({
//   selector: 'app-formulario-receptor',
//   templateUrl: './formulario-receptor.component.html',
//   styleUrls: ['./formulario-receptor.component.css']
// })
// export class FormularioReceptorComponent implements OnDestroy {
//   formularioSubscription: Subscription;
//   formularioData: any;

//   constructor(private formularioService: FormularioService ) {
//     this.formularioSubscription = this.formularioService.obtenerFormulario()
//       .subscribe(data => {
//         this.formularioData = data;
//       });
//   }

//   ngOnDestroy() {
//     this.formularioSubscription.unsubscribe();
//   }
// }



