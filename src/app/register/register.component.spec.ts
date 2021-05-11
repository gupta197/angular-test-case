import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RegisterComponent]
      ,
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents().then(() => {
        fixture = TestBed.createComponent(RegisterComponent);

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
});
