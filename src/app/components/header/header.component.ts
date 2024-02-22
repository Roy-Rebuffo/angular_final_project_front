import { Component } from '@angular/core';
import { AuthService } from 'src/app/modules/auth/services/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isAdmin: boolean = false
  navVisible: boolean = false;
  
  constructor(private authServive:AuthService,){
    this.authServive.isAdmin().subscribe({
      next: (isAdmin) => this.isAdmin = isAdmin
    })
    
  }

  toggleNav() {
    this.navVisible = !this.navVisible;
  }
}
