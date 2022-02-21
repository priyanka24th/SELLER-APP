import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  isAuthenticated = true;
  private userSub: Subscription;
  para ='Get exclusive list of sellers for all your products.'

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    // this.userSub = this.authService.user.subscribe(user => {
    //   this.isAuthenticated = !!user;
   
      
     
    // }); 
    // console.log("subscription_ini",this.userSub)
    // if(this.isAuthenticated){
    //   this.para ='Get exclusive list of sellers for all your products.'
    // }
    // else
    // this.para = 'Please Login'
    // console.log(this.isAuthenticated,this.para)
   
  }
  ngOnDestroy(){
    // if(this.userSub)
    // console.log("subscription",this.userSub)
    // this.userSub.unsubscribe()
    // console.log("subscription1",this.userSub)
  }

}
