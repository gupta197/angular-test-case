import { User } from './../models/users';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DebugElement } from '@angular/core';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';
import { Data } from '@angular/router';
import { UserServiceMock } from '../mocks/user.service.mock';
import { LoginServiceService } from '../services/login-service.service';

import { RegisterComponent, RegUser } from './register.component';
import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  // let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<RegisterComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  // let httpClient: HttpClient;
  // let regService: LoginServiceService

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent]
      ,
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [
        { provide: LoginServiceService, useClass: UserServiceMock }
      ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(RegisterComponent);

        // Inject the http service and test controller for each test

        // httpClient = TestBed.inject(HttpClient);
        component = fixture.componentInstance; // ContactComponent test instance
        // query for the title <h1> by CSS element selector
        de = fixture.debugElement.query(By.css('form'));
        el = de.nativeElement;
      });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it(`should have as text 'Register'`, async(() => {
    expect(component.title).toEqual('Register');
  }));

  it(`should set submitted to true`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it(`should call the onSubmit method`, async(() => {
    spyOn(component, 'onSubmit');
    component.onSubmit();
    // el = fixture.debugElement.query(By.css('button')).nativeElement;
    // el.click();
    // expect(component.onSubmit).toHaveBeenCalled();
  }));

  it(`form should be invalid`, async(() => {
    component.register.controls['name'].setValue('');
    component.register.controls['email'].setValue('');
    component.register.controls['phone'].setValue('');
    component.register.controls['password'].setValue('');
    expect(component.register.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.register.controls['name'].setValue('test');
    component.register.controls['email'].setValue('test@test.com');
    component.register.controls['phone'].setValue('1234567890');
    component.register.controls['password'].setValue('123456');
    expect(component.register.valid).toBeTruthy();
  }));

  it('submitting a form Register a user', () => {
    expect(component.register.valid).toBeFalsy();
    component.register.controls['name'].setValue('test');
    component.register.controls['email'].setValue('test@test.com');
    component.register.controls['phone'].setValue('1234567890');
    component.register.controls['password'].setValue('pass');
    expect(component.register.valid).toBeTruthy();

    let user: RegUser;
    // Subscribe to the Observable and store the user in a local variable.
    component.RegisterUser.subscribe((value) => user = value);

    // Trigger the onSubmit function
    component.onSubmit();

    // Now we can check to make sure the emitted value is correct
    expect(user.name).toBe("test");
    expect(user.email).toBe("test@test.com");
    expect(user.phone).toBe("1234567890");
    expect(user.password).toBe("pass");
  });
  it(`should have one user`, async(() => {
    expect(component.users.length).toEqual(1);
  }));

  // it(`html should render one user`, async(() => {
  //   fixture.detectChanges();
  //   const el = fixture.nativeElement.querySelector('p');
  //   expect(el.innerText).toContain('user');
  // }));

  it('Should call the OnSubmit method', () => {
    fakeAsync(() => {
      fixture.detectChanges();
      spyOn(component, 'onSubmit');
      el = fixture.debugElement.query(By.css('Save')).nativeElement;
      el.click();
      expect(component.onSubmit).toHaveBeenCalledTimes(0);
    })
  })


});
