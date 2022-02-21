import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../auth/auth.service';
import { DataStorageService } from '../shared/data-storage.service'
import { SellersService } from './sellers.service'
import { RouterTestingModule } from '@angular/router/testing';

describe('SellersComponent', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule.withRoutes([])],
      providers: [AuthService, DataStorageService, SellersService],
    });

  });


  it('should create Seller Service', () => {
    const service: SellersService = TestBed.get(SellersService);
    expect(service).toBeTruthy();
  });

  it('should check seller values', inject([SellersService],
    (sellerService) => {
      let mockData = [
        {
          "first_name": "Frieda",
          "last_name": "Kunze"
        }
      ]

      sellerService.getSellers().subscribe(result => {
        expect(result).toEqual(mockData)
      });
      sellerService.setSellers(
        mockData)

    }));

});