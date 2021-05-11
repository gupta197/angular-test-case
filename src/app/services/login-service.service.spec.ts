import { TestBed } from '@angular/core/testing';
import { User } from '../models/users';

import { LoginServiceService } from './login-service.service';

describe('LoginServiceService', () => {
  let service: LoginServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should set the user correctly', () => {
    // Arrange
    const user: User = {
      id: 'test',
      name: 'test',
      email: 'abc@gmail.com',
      phone: '1234567890',
      password : 'pass'
    };
  
    // Act
    service.setRegisterUser(user);
  
    // Assert
    expect(service['registerUser'].id).toEqual('test');
    expect(service['registerUser'].name).toEqual('test');
    expect(service['registerUser'].email).toEqual('abc@gmail.com');
    expect(service['registerUser'].phone).toEqual('1234567890');
    expect(service['registerUser'].password).toEqual('pass');
  });

  it('should get the user correctly', () => {
    // Arrange
    service['registerUser'] = {
      id: 'test',
      name: 'test',
      email: 'abc@gmail.com',
      phone: '1234567890',
      password : 'pass'
    };
  
    // Act
    const user = service.getRegisterUser();
  
    // Assert
    expect(user.id).toEqual('test');
    expect(user.name).toEqual('test');
    expect(user.email).toEqual('abc@gmail.com');
    expect(user.phone).toEqual('1234567890');
    expect(user.password).toEqual('pass');
  })

});
