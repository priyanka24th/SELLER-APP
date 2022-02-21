import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthService } from '../auth/auth.service';
import {DataStorageService} from '../shared/data-storage.service'
import { RouterTestingModule } from '@angular/router/testing';
import { AuthComponent } from './auth.component';



describe('AuthService', () => {
 
      beforeEach(() => TestBed.configureTestingModule({
        imports: [HttpClientTestingModule,RouterTestingModule], 
        providers: [AuthService,DataStorageService],
        declarations: [
            AuthComponent
          ],
      })
      );

       it('should be created DataStorageService', () => {
        const service: DataStorageService = TestBed.get(DataStorageService);
        expect(service).toBeTruthy();
      
       });

       it('should be created AuthService', () => {    
        const authService:AuthService = TestBed.get(AuthService)
        expect(authService).toBeTruthy();
       });
   
        it('Checks the toggle feature', () => {
            let fixture = TestBed.createComponent(AuthComponent);
             let component =fixture.debugElement.componentInstance;
          expect(component.isLoginMode)
            .withContext('on at first')
            .toBe(true);
            component.onSwitchMode();
          expect(component.isLoginMode)
            .withContext('off after click')
            .toBe(false);
            component.onSwitchMode();
          expect(component.isLoginMode)
            .withContext('on after second click')
            .toBe(true);
        });


        it('Checks the Button Text', () => {
            let fixture = TestBed.createComponent(AuthComponent);
             let component =fixture.debugElement.componentInstance;
          expect(component.buttonText)
            .withContext('on at first')
            .toBe('Sign Up');
            component.onSwitchMode();
          expect(component.buttonText)
            .withContext('off after click')
            .toBe('Log In');
            component.onSwitchMode();
          expect(component.buttonText)
            .withContext('on at second')
            .toBe('Sign Up');
        });
        it('component initial state', () => {
          let fixture = TestBed.createComponent(AuthComponent);
          let component =fixture.debugElement.componentInstance;
          expect(component.error).toBeNull();
         
        });
      

    });