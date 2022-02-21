
import { AuthService } from '../auth/auth.service';
import { Component, OnInit, OnDestroy,ViewChild } from '@angular/core';
import {Subscription } from 'rxjs';
import {AfterViewInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table'
import { SellersService } from './sellers.service';
import { Sellers } from './sellers.model';
import { ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-sellers',
  templateUrl: './sellers.component.html',
  styleUrls: ['./sellers.component.css']
})
export class SellersComponent implements OnInit,OnDestroy, AfterViewInit{
  hasSeller = false;
  SELLER_DATA: Sellers[] = [
    // {
    //     "anPersonId": "80.9.25.60",
    //     "first_name": "Frieda",
    //     "last_name": "Kunze",
    //     "externalId": "3458f0b3-ec72-48e6-b72a-cab439d3a75e",
    //     "companyName": "Sony",
    //     "cardType": "MasterCard",
    //     "product": "Headset",
    //     "phone": "484-220-1351",
    //     "email": "Herzog_Elizabeth@gmail.com"
    // } 
  ]

  displayedColumns: string[] = ["anPersonId",
  "first_name",
  "last_name",
  "externalId",
  "companyName",
  "cardType",
  "product",
  "phone",
  "email",
];
  dataSource = new MatTableDataSource<Sellers>(this.SELLER_DATA);
  sellers: Sellers[];
  subscription: Subscription;
 

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
     this.dataSource.paginator = this.paginator;  
  }
 
  isAuthenticated = false;
  private userSub: Subscription;

  constructor(
    private authService: AuthService,
    private sellerServ:SellersService,
    private activatedRoute:ActivatedRoute,
    private route:Router,
    private dataStorage:DataStorageService,
    private changeDetectorRefs: ChangeDetectorRef) { 
    this.hasSeller = this.dataSource.filteredData.length?true:false;
    setTimeout(() => this.dataSource.paginator = this.paginator);
      
  }

  ngOnInit():void {
    this.userSub = this.authService.user.subscribe(user => {
      this.isAuthenticated = !!user;
    }); 
 
  //console.log(this.activatedRoute.snapshot.queryParams);
  this.activatedRoute.queryParams
    .subscribe(
      (queryParams: Params) => {
      if(queryParams['productName'])
      this.dataStorage.retrieveData(queryParams['productName'])
      else
      this.route.navigate(['/sellers'])
      this.sellerServ.setSellers([])
      }
    );
    this.refresh(); 
  }
  
  refresh() {   
  
    this.sellerServ.getSellers().subscribe((seller)=>{
      this.SELLER_DATA = seller
     // console.log("SellerData",seller,this.SELLER_DATA) 
      this.dataSource = new MatTableDataSource(this.SELLER_DATA);
      this.dataSource.paginator = this.paginator;
      this.changeDetectorRefs.detectChanges();
      this.hasSeller = this.dataSource.filteredData.length?true:false;   
     }
     )
 } 
  ngOnDestroy() {
    this.userSub.unsubscribe();
  }
 
}


