import { AdminActionsService } from './../../services/admin-actions.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrator-main-page',
  templateUrl: './administrator-main-page.component.html',
  styleUrls: ['./administrator-main-page.component.css']
})
export class AdministratorMainPageComponent implements OnInit {

  productList: any[] = []

  constructor(private adminActionsService:AdminActionsService){}


  ngOnInit() {
    this.adminActionsService.getProducts().subscribe({
      next: (response: any) => this.productList = response
    })
  }
}
