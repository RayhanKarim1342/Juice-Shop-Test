// import { type ComponentFixture, TestBed } from '@angular/core/testing'
//
// import { PasswordStrengthInfoComponent } from './password-strength-info.component'
//
// describe('PasswordStrengthInfoComponent', () => {
//   let component: PasswordStrengthInfoComponent
//   let fixture: ComponentFixture<PasswordStrengthInfoComponent>
//
//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [PasswordStrengthInfoComponent]
//     })
//       .compileComponents()
//
//     fixture = TestBed.createComponent(PasswordStrengthInfoComponent)
//     component = fixture.componentInstance
//     fixture.detectChanges()
//   })
//
//   xit('should create', () => {
//     expect(component).toBeTruthy()
//   })
//
//   // todo: unit test each conditional | passwordLength message
// })
/* eslint-disable @typescript-eslint/semi */
import { type ComponentFixture, TestBed } from '@angular/core/testing';
import { PasswordStrengthInfoComponent } from './password-strength-info.component';

// Minimal mock for PasswordStrengthComponent
class MockPasswordStrengthComponent {
  minLength = 8;
}

describe('PasswordStrengthInfoComponent', () => {
  let fixture: ComponentFixture<PasswordStrengthInfoComponent>;
  let component: PasswordStrengthInfoComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordStrengthInfoComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(PasswordStrengthInfoComponent);
    component = fixture.componentInstance;
    // Provide the mock password component before init
    component.passwordComponent = new MockPasswordStrengthComponent() as any;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default criteria messages and flags', () => {
    expect(component.enableScoreInfo).toBeFalse();
    expect(component.lowerCaseCriteriaMsg).toBe('contains at least one lower character');
    expect(component.upperCaseCriteriaMsg).toBe('contains at least one upper character');
    expect(component.digitsCriteriaMsg).toBe('contains at least one digit character');
    expect(component.specialCharsCriteriaMsg).toBe('contains at least one special character');
  });

  it('should set default minCharsCriteriaMsg when not provided', () => {
    component.minCharsCriteriaMsg = '';
    component.passwordComponent.minLength = 10;
    component.ngOnInit();
    expect(component.minCharsCriteriaMsg).toBe('contains at least 10 characters');
  });

  it('should not override provided minCharsCriteriaMsg', () => {
    component.minCharsCriteriaMsg = 'my custom message';
    component.passwordComponent.minLength = 12;
    component.ngOnInit();
    expect(component.minCharsCriteriaMsg).toBe('my custom message');
  });
});

