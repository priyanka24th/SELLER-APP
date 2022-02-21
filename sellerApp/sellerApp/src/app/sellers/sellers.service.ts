
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Sellers } from './sellers.model';

@Injectable({
  providedIn: 'root'
})
export class SellersService {
 sellers = new Subject<Sellers[]>();

  constructor() { }
  
  setSellers(sellers: Sellers[]) { 
   this.sellers.next(sellers)
  }

  getSellers() :Observable<any>{
    return this.sellers.asObservable();
  }
 
}






