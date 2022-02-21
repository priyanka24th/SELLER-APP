import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';
import { Sellers } from '../sellers/sellers.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit, OnDestroy {
  productList  = ['Laptop','MacBook','Android','Headset','chip']
  isAuthenticated = false;
  private userSub: Subscription;
  sellers: Sellers[];
  

  constructor(
    private dataStorageService: DataStorageService,
    private authService: AuthService,

  ) { 
  }

  ngOnInit() {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    });
  
   
  }

onFetchProduct(productName:string){
this.dataStorageService.retrieveData(productName)
 
}
  onLogout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    if(this.userSub)
    this.userSub.unsubscribe();
  }
}
