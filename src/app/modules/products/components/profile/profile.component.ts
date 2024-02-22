import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  @Input() producto: any;
  favoritos: any = JSON.parse(localStorage.getItem('favoritos')!);

  constructor(){
    console.log(this.favoritos);
    
  }
  
  agregarFavorito(producto: any) {
    this.favoritos.push(producto);
    if (localStorage.getItem('favoritos')) {   localStorage.setItem('favoritos', JSON.stringify([])); }
  }
}

  