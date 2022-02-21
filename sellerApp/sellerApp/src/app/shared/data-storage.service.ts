import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SellersService } from '../sellers/sellers.service';

@Injectable({ providedIn: 'root' })
export class DataStorageService {
  constructor(
    private http: HttpClient,
    private sellService:SellersService
  ) {}

  fetchSellers(product:string) {
    return this.http
      .get(
        'http://localhost:3000/seller/'+product
       )
  }
  
  retrieveData(productName: string) {
    this.fetchSellers(productName)
      .subscribe({
        next: (data: any[]) => this.sellService.setSellers(data),
        error: (e) => console.error(e),
        complete: () => console.info('complete')
      })
  }
 
  }
