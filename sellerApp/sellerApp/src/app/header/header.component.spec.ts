import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AuthService } from '../auth/auth.service';
import {DataStorageService} from '../shared/data-storage.service'
import { RouterTestingModule } from '@angular/router/testing';




describe('Header Component', () => {
 
  const mockData = {
    "name":"Priyanka"
  }
   
      beforeEach(() => {
        TestBed.configureTestingModule({
          imports: [HttpClientTestingModule,RouterTestingModule],
         providers: [AuthService,DataStorageService],
        
        });
    });

       it('should be create Data Storage Service', () => {
        const service: DataStorageService = TestBed.get(DataStorageService);
        expect(service).toBeTruthy();
       });

       it('should Check API end point', () => {
         let service = TestBed.inject(DataStorageService);
         let httpController = TestBed.inject(HttpTestingController);
         let httpTestingController = TestBed.get(HttpTestingController);
         let productName = 'MacBook'
         service.fetchSellers(productName).subscribe((res) => {
           console.log(res)
           expect(res).toEqual(mockData);
         });
        const req = httpController.expectOne({
          method: 'GET',
          url: 'http://localhost:3000/seller/'+productName,
        });
        expect(req.request.responseType).toEqual('json');
        req.flush(mockData);
        httpTestingController.verify();
      });
     
    });