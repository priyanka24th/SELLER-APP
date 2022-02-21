import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';

import { HttpClientTestingModule} from '@angular/common/http/testing';
import { AuthService } from '../auth/auth.service';
import {DataStorageService} from '../shared/data-storage.service'
import {SellersService} from '../sellers/sellers.service'
import { RouterTestingModule } from '@angular/router/testing';


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule(
      {
      
      declarations: [ HomeComponent ],
      imports: [HttpClientTestingModule,RouterTestingModule.withRoutes([])], 
      providers: [AuthService,DataStorageService,SellersService]
    })
    .compileComponents();
   
   
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
 
  it('should create Home Component', () => {
    expect(component).toBeTruthy();
  });
   
  it('should check the paragraph', () => {
    let fixture = TestBed.createComponent(HomeComponent);
    let component = fixture.debugElement.componentInstance;
    expect(component.para)
      .toContain('Get exclusive list of sellers for all your products.');
  });
 
});
